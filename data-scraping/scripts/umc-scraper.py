# Author: Frank Liu
# Scrapes data from churchfinder.com into a csv file

from codecs import latin_1_decode
from bs4 import BeautifulSoup
import requests
import re
import os

info = [['Wisconsin, USA', 43.7844397, -88.7878678], ['West Virginia, USA', 38.5976262, -80.4549026], 
           ['Vermont, USA', 44.5588028, -72.57784149999999], ['Texas, the USA', 31.9685988, -99.9018131], 
           ['South Dakota, the US', 43.9695148, -99.9018131], ['Rhode Island, the US', 41.5800945, -71.4774291], 
           ['Oregon, the US', 43.8041334, -120.5542012], ['New York, USA', 40.7127753, -74.0059728], ['New Hampshire, USA', 43.1938516, -71.5723953], 
           ['Nebraska, USA', 41.4925374, -99.9018131], ['Kansas, the US', 39.011902, -98.4842465], ['Mississippi, USA', 32.3546679, -89.3985283], 
           ['Illinois, USA', 40.6331249, -89.3985283], ['Delaware, the US', 38.9108325, -75.52766989999999], 
           ['Connecticut, USA', 41.6032207, -73.087749], ['Arkansas, the US', 34.5573549, -92.28634029999999], 
           ['Indiana, USA', 40.2671941, -86.1349019], ['Missouri, USA', 37.9642529, -91.8318334], 
           ['Florida, USA', 27.6648274, -81.5157535], ['Nevada, USA', 38.8026097, -116.419389], 
           ['Maine, the USA', 45.253783, -69.4454689], ['Michigan, USA', 44.3148443, -85.60236429999999], 
           ['Georgia, the USA', 32.1656221,-82.9000751], ['Hawaii, USA', 19.8967662, -155.5827818], 
           ['Alaska, USA', 64.2008413, -149.4936733], ['Tennessee, USA', 35.5174913, -86.5804473], 
           ['Virginia, USA', 37.4315734, -78.6568942], ['New Jersey, USA', 40.0583238, -74.4056612], 
           ['Kentucky, USA', 37.8393332, -84.2700179], ['North Dakota, USA', 47.5514926, -101.0020119], 
           ['Minnesota, USA', 46.729553, -94.6858998], ['Oklahoma, the USA', 35.0077519, -97.092877], 
           ['Montana, USA', 46.8796822, -110.3625658], ['Washington, the USA', 47.7510741, -120.7401386], 
           ['Utah, USA', 39.3209801, -111.0937311], ['Colorado, USA', 39.5500507, -105.7820674], 
           ['Ohio, USA', 40.4172871, -82.90712300000001], ['Alabama, USA', 32.3182314, -86.902298], 
           ['Iowa, the USA', 41.8780025, -93.097702], ['New Mexico, USA', 34.5199402, -105.8700901], 
           ['South Carolina, USA', 33.836081, -81.1637245], ['Pennsylvania, USA', 41.2033216, -77.1945247], 
           ['Arizona, USA', 34.0489281, -111.0937311], ['Maryland, USA', 39.0457549, -76.64127119999999], 
           ['Massachusetts, USA', 42.4072107, -71.3824374], ['California, the USA', 36.778261, -119.4179324], 
           ['Idaho, USA', 44.0682019, -114.7420408], ['Wyoming, USA', 43.0759678, -107.2902839], 
           ['North Carolina, USA', 35.7595731, -79.01929969999999], ['Louisiana, USA', 30.9842977, -91.96233269999999]]

fileNumber = 0

for state in info:
    state_name = state[0]
    state_lat = state[1]
    state_lon = state[2]
    pageUrl = f"https://www.umc.org/find-a-church/search?latitude={state_lat}&longitude={state_lon}&search={state_name}"
    pageURLText = requests.get(pageUrl, headers={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246"}).text
    pageSoup = BeautifulSoup(pageURLText, 'html.parser')    
    churches = pageSoup.find_all('div', class_ = "column col1of2 church-description")
    #scrape the total number of pages pertaining to the current state
    # multiply that number by 5
    # once we go over that number, then we go to the next state
    num_pages = pageSoup.find(id="totalResults")
    num_pages = BeautifulSoup(str(num_pages), 'html.parser').input
    num_pages = num_pages.attrs
    num_pages = int(num_pages['value'])
    # get all of the sub_urls
    curr_page = 0
    urls = []
    
    while curr_page <= num_pages:
        urls.append(f"https://www.umc.org/find-a-church/search?latitude={state_lat}&longitude={state_lon}&search={state_name}&offset={curr_page}&limit=5")
        curr_page += 5
    
    for url in urls:
        page_url_text = requests.get(url, headers={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246"}).text
        page_Soup = BeautifulSoup(page_url_text, 'html.parser')    
        new_churches = page_Soup.find_all('div', class_ = "column col1of2 church-description")
            
        for church in new_churches:
            if church:
                try:
                    church_name = church.find('h3', class_ = "church-name").get_text()
                except:
                    church_name = "N/A"
                try:
                    church_address = church.find('p').get_text().strip()
                    church_address = church_address.replace('\n','')
                    church_address = church_address.replace('\r','')
                    church_address = church_address.replace('United States','')
                except:
                    church_address = "N/A"
                
                save_path = "../data"
                file_name = 'umc.csv'
                completeName = os.path.join(save_path, file_name)
                
                fileNumber += 1
                with open (completeName, 'a') as f:
                    f.write(f'{church_name};{church_address}\n')
                    print(f'File saved: {fileNumber}')