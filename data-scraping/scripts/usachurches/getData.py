from bs4 import BeautifulSoup
import requests
import re
import os

states = [ 'AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA',
           'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME',
           'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM',
           'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX',
           'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY']   

cities = []
fileNumber = 0

for state in states:
    cities = []
    pageUrl = f"http://www.usachurches.org/church-in-{state}.htm"
    pageURLText = requests.get(pageUrl, headers={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246"}).text
    pageSoup = BeautifulSoup(pageURLText, 'html.parser')    
    popularCities = pageSoup.find_all('div', class_ = "field")
    
    for city in popularCities:
        if city:
            cityString = city.get_text()
            nameArray = cityString.split("\n")
            for el in nameArray:
                if el != "" and el != "Select a city":
                    cities.append(el)
    for city in cities:
        cityUrl = f"http://www.usachurches.org/search/{state}/{city}/"
    

        html_text = requests.get(cityUrl).text
        soup = BeautifulSoup(html_text, 'html.parser')

        churches = soup.find_all('div', class_ = "col span_1_of_4 church-grid")

        for index, church in enumerate(churches):

            church_info = church.find('p')
            current_church = church_info.find('a')
            church_name = current_church.text
            church_href = current_church.get('href')

            church_size_and_address = church_info.find('span')
            church_address_parts = church_size_and_address.text.split()

            church_size = church_size_and_address.find('a').text
            church_number = church_address_parts[2].replace('church', '')

            church_address_parts = church_address_parts[3:]
            complete_address = church_number
            states = [ 'AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA','HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY']
            for part in church_address_parts:
                elementArray = re.findall('[A-Z][^A-Z]*', part)
                if part not in states:
                    if len(elementArray) > 1:
                        for element in elementArray:
                            complete_address = complete_address + " " + element
                    else:
                        complete_address = complete_address + " " + part
                else:
                    complete_address = complete_address + " " + part
            church_name_underscore = church_name.replace(" ", "_")
            
            save_path = "./data-scraping/data"
            # file_name = f'{church_name_underscore}.txt'
            # file_name = 'data.txt'
            file_name = 'data_for_sheets.txt'
            completeName = os.path.join(save_path, file_name)
            
            fileNumber += 1
            #data_for_sheets.txt
            with open (completeName, 'a') as f:
                f.write(f'{church_name}; {church_size}; {complete_address}; {church_href}; \n')
                print(f'File saved: {fileNumber}')


            # # data.txt
            # with open (completeName, 'a') as f:
            #     f.write(f'Name: {church_name} \n')
            #     f.write(f'Size: {church_size} \n')
            #     f.write(f'Address: {complete_address} \n')
            #     f.write(f'More info: {church_href} \n')
            #     f.write('\n')
            #     print(f'File saved: {fileNumber}')
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
#         exclude = "Select a city"
#         if (("\n" != city) and (name != exclude)):
#             cities.append(name)
    
# print(cities)
    # for city in popularCities:
    #     pattern = re.compile("[a-zA-Z]*\schurches")

    #     if ()
    
# elementArrayValue = re.findall('church-in-[a-z]{2}.htm', states)
# states2 = states.find_all('option', value_ = "styled-select")

# print(states)



# pages = ["http://www.usachurches.org/search/searchbystate.php?query=&denomination=&keywords=&city=&size=&statea=nj&worshipstyle=", 
#          "http://www.usachurches.org/search/searchbystate.php?start=20&query=&denomination=&keywords=&city=&size=&statea=nj&worshipstyle=", 
#          "http://www.usachurches.org/search/searchbystate.php?start=40&query=&denomination=&keywords=&city=&size=&statea=nj&worshipstyle=", 
#          "http://www.usachurches.org/search/searchbystate.php?start=60&query=&denomination=&keywords=&city=&size=&statea=nj&worshipstyle=", 
#          "http://www.usachurches.org/search/searchbystate.php?start=80&query=&denomination=&keywords=&city=&size=&statea=nj&worshipstyle=", 
#          "http://www.usachurches.org/search/searchbystate.php?start=100&query=&denomination=&keywords=&city=&size=&statea=nj&worshipstyle=",
#          "http://www.usachurches.org/search/searchbystate.php?start=120&query=&denomination=&keywords=&city=&size=&statea=nj&worshipstyle=",
#          "http://www.usachurches.org/search/searchbystate.php?start=140&query=&denomination=&keywords=&city=&size=&statea=nj&worshipstyle=",
#          "http://www.usachurches.org/search/searchbystate.php?start=160&query=&denomination=&keywords=&city=&size=&statea=nj&worshipstyle=",
#          "http://www.usachurches.org/search/searchbystate.php?start=180&query=&denomination=&keywords=&city=&size=&statea=nj&worshipstyle=",
#          "http://www.usachurches.org/search/searchbystate.php?start=200&query=&denomination=&keywords=&city=&size=&statea=nj&worshipstyle="]

# for page in pages:
    

#     html_text = requests.get(page).text
#     soup = BeautifulSoup(html_text, 'html.parser')

#     churches = soup.find_all('div', class_ = "col span_1_of_4 church-grid")

#     for index, church in enumerate(churches):

#         church_info = church.find('p')
#         current_church = church_info.find('a')
#         church_name = current_church.text
#         church_href = current_church.get('href')

#         church_size_and_address = church_info.find('span')
#         church_address_parts = church_size_and_address.text.split()

#         church_size = church_size_and_address.find('a').text
#         church_number = church_address_parts[2].replace('church', '')

#         church_address_parts = church_address_parts[3:]
#         complete_address = church_number
#         states = [ 'AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA','HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY']
#         for part in church_address_parts:
#             elementArray = re.findall('[A-Z][^A-Z]*', part)
#             if part not in states:
#                 if len(elementArray) > 1:
#                     for element in elementArray:
#                         complete_address = complete_address + " " + element
#                 else:
#                     complete_address = complete_address + " " + part
#             else:
#                 complete_address = complete_address + " " + part
#         church_name_underscore = church_name.replace(" ", "_")
        
#         save_path = "../data-scraping/data"
#         # file_name = f'{church_name_underscore}.txt'
#         # file_name = 'data.txt'
#         file_name = 'data_for_sheets.txt'
#         completeName = os.path.join(save_path, file_name)
        
#         #data_for_sheets.txt
#         with open (completeName, 'a') as f:
#             f.write(f'{church_name}; {church_size}; {complete_address}; {church_href}; \n')
#             print(f'File saved: {index}')


        # data.txt
        # with open (completeName, 'a') as f:
        #     f.write(f'Name: {church_name} \n')
        #     f.write(f'Size: {church_size} \n')
        #     f.write(f'Address: {complete_address} \n')
        #     f.write(f'More info: {church_href} \n')
        #     f.write('\n')
        #     print(f'File saved: {index}')

