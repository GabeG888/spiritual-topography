# Author: Frank Liu
# Scrapes data from churchfinder.com into a csv file

from bs4 import BeautifulSoup
import requests
import re
import os

states = [ 'AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA',
           'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME',
           'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM',
           'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX',
           'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY']   

fileNumber = 0

for state in states:
    citiesArray = []
    pageUrl = f"https://www.churchfinder.com/churches/{state}"
    pageURLText = requests.get(pageUrl, headers={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246"}).text
    pageSoup = BeautifulSoup(pageURLText, 'html.parser')    
    cities = pageSoup.find_all('span', class_ = "field-content")
    
    for city in cities:
        citiesArray.append(city.get_text())

    for city in citiesArray:
        cityUrl = f"https://www.churchfinder.com/churches/{state}/{city}"   
            
        html_text = requests.get(cityUrl).text
        soup = BeautifulSoup(html_text, 'html.parser')
        
        churches = soup.find_all('div', class_ = re.compile("views-row views-row-\d* views-row-(?:odd|even)[a-zA-Z-\s]*"))
        
        for church in churches:
            
            church_name = church.find('div', class_ = "views-field views-field-title")
            if (church_name):
                # church name
                try:
                    church_name = church_name.find('a').text
                    # church address
                    church_address = church.find('div', class_ = "field field-name-field-address field-type-addressfield field-label-hidden view-mode-_custom_display")
                    church_address = church_address.find('div', class_ = "field-item even").get_text()    
                    church_address = BeautifulSoup(church_address, "html.parser")
                    target = church_address.find_all(text=re.compile(r'\s\s'))
                    for v in target:
                        v.replace_with(v.replace('  ',', '))
                    church_address = church_address.text  
                except AttributeError:
                    church_address = "N/A"
                # church denomination
                try:
                    church_denomination = church.find('div', class_ = "field field-name-field-specific-denomination field-type-node-reference field-label-hidden view-mode-_custom_display").get_text()
                    church_denomination = BeautifulSoup(church_denomination, "html.parser")
                    target = church_denomination.find_all(text=re.compile(r'\n\s\s\s\s'))
                    for v in target:
                        v.replace_with(v.replace('\n    ',''))
                    target = church_denomination.find_all(text=re.compile(r'\s\s'))
                    for v in target:
                        v.replace_with(v.replace('  ',''))
                    church_denomination = church_denomination.text
                except AttributeError:
                    church_denomination = "N/A"
                
                save_path = "./data-scraping/data"
                file_name = 'churchfinder_data.txt'
                completeName = os.path.join(save_path, file_name)
                
                fileNumber += 1
                with open (completeName, 'a') as f:
                    f.write(f'{church_name};{church_denomination};{church_address}\n')
                    print(f'File saved: {fileNumber}')