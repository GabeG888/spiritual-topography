# Author: Frank Liu
# Scrapes data from http://hirr.hartsem.edu/cgi-bin/mega/db.pl?db=default&uid=default&view_records=1&ID=*&sb=5 into a csv file

from bs4 import BeautifulSoup
import requests
import re
import os
import sys
sys.setrecursionlimit(6000)

fileNumber = 0

page_URL = "http://hirr.hartsem.edu/cgi-bin/mega/db.pl?db=default&uid=default&view_records=1&ID=*&sb=5"
page_URL_text = requests.get(page_URL, headers={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246"}).text
page_Soup = BeautifulSoup(page_URL_text, 'html.parser')

table_rows = page_Soup.find_all('tr', bgcolor="#E2E2E2")

for table_row in table_rows:
    table_datas = table_row.find_all('td')
    counter = 0
        
    for table_data in table_datas:
        if counter == 0:
            church_name = table_data.find('a')
            church_name = church_name.get_text()
            # print(church_name.get_text())
        elif counter == 1:
            city = table_data.get_text()
        elif counter == 2:
            state = table_data.get_text()
        elif counter == 3:
            attend = table_data.get_text()
        elif counter == 4:
            denom = table_data.get_text()
        counter += 1
    counter = 0
        
    save_path = "../data"
    file_name = 'megachurches_data.csv'
    completeName = os.path.join(save_path, file_name)
    
    fileNumber += 1
    with open (completeName, 'a') as f:
        f.write(f'{church_name};{city}, {state};{attend};{denom}\n')
        print(f'File saved: {fileNumber}')