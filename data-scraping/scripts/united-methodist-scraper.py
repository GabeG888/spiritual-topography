#!/usr/bin/env python3
# Author: Gabe Gordon
# Scrapes data from https://www.umc.org/find-a-church/ into a csv file


import time
import grequests
from bs4 import BeautifulSoup


names = []
addrs = []
failed_pages = []

chrome_agent = \
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
base_url = "https://www.umc.org/find-a-church/church/?id="
start_time = round(time.time())
pages = 100000
max_request = 1000

print(f'Started at {str(start_time)}, output file will be umc_{str(start_time)}.csv')


# Save all data to a csv file
def save_csv():
    csv_string = 'name;addr'

    for i in range(len(names)):
        csv_string += '\n' + ';'.join([names[i], addrs[i]])

    with open('../data/umc_' + str(start_time) + '.csv', 'wb') as f:
        f.write(csv_string.encode())


# Get all urls asynchronously
def get_urls(urls):
    resps = [None]
    tries = 0
    while None in resps:
        tries += 1
        try:
            reqs = (grequests.get(url, headers={"User-Agent": chrome_agent}) for url in urls)
            resps = grequests.map(reqs)
        except:
            resps = [None]
    if tries >= 5 and tries % 5 == 0:
        print('Connection error...')
    return resps

# Get each page
page_urls = [base_url + str(i) for i in range(pages)]
chunks = [page_urls[max_request*i:max_request*(i+1)] for i in range(pages // max_request)]

page_resps = []
for chunk_index, chunk in enumerate(chunks):
    print(f'\r{chunk_index}/{len(chunks)}', end='')
    page_resps += get_urls(chunk)

# Get the data from each page
for page_index, page_resp in enumerate(page_resps):
    print(f"\r{page_index}/{pages}", end='')
    page_soup = BeautifulSoup(page_resp.content, 'html.parser')
    church_div = page_soup.find('div', class_='col1of2 column church-detail-text')
    if not church_div: continue
    church_soup = BeautifulSoup(str(church_div), 'html.parser')
    name = church_soup.find('h1')
    addr = church_soup.find('p', class_='fac-church-address')
    if name or addr:
        if name:
            names.append(name.text)
        else:
            names.append('')
        if addr:
            addrs.append(addr.text.replace('\n', '').replace('\r',''))
        else:
            addrs.append('')

# Save, print info, and exit
save_csv()
print(f"Done after {round(time.time() - start_time) } seconds")
