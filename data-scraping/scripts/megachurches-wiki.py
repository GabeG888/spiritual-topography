# Author: Frank Liu
# Scrapes data from https://en.wikipedia.org/wiki/List_of_megachurches_in_the_United_States into a csv file

from bs4 import BeautifulSoup
import requests
import re
import os
import sys
sys.setrecursionlimit(6000)

fileNumber = 0

page_URL = "https://en.wikipedia.org/wiki/List_of_megachurches_in_the_United_States"
page_URL_text = requests.get(page_URL, headers={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246"}).text
page_Soup = BeautifulSoup(page_URL_text, 'html.parser') 

table = page_Soup.find('table', class_ = "wikitable sortable")
table_rows = table.find_all('tr')

counter = 0
for table_row in table_rows:
    table_datas = table_row.find_all('td')
    church_name = "N/A"
    city = "N/A"
    state = "N/A"
    attend = "N/A"
    denom = "N/A"
    for table_data in table_datas:
        if counter == 0:
            try:
                church_name = table_data.get_text()
                church_name = church_name.replace("\n", "")
                church_name = church_name.strip()
            except:
                church_name = "N/A"
        elif counter == 1:
            try:
                city = table_data.find('a')
                city = city.get_text()
                city = city.replace("\n", "")
                city = city.strip()
            except:
                city = "N/A"
        elif counter == 2:
            try:
                state = table_data.get_text()
                state = state.replace("\n", "")
                state = state.strip()
            except:
                state = "N/A"
        elif counter == 4:
            try:
                attend = table_data.get_text()
                attend = attend.replace("\n", "")
                attend = attend.strip()
            except:
                attend = "N/A"
        elif counter == 5:
            try:
                denom = table_data.get_text()
                denom = denom.replace("\n", "")
                denom = denom.strip()
            except:
                denom = "N/A"
        counter += 1
    counter = 0
    save_path = "../data"
    file_name = 'megachurches_wiki_data.csv'
    completeName = os.path.join(save_path, file_name)
    
    fileNumber += 1
    with open (completeName, 'a') as f:
        f.write(f'{church_name};{city}, {state};{attend};{denom}\n')
        print(f'File saved: {fileNumber}')