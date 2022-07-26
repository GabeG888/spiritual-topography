#!/usr/bin/env python3
# Author: Gabe Gordon
# Scrapes data from https://independentbaptist.church/church/ into a csv file


import time
import grequests
import json


names = []
addrs = []
failed_pages = []

chrome_agent = \
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
base_url = "https://independentbaptist.church/api/church/"
start_time = round(time.time())
pages = 5591

print(f'Started at {str(start_time)}, output file will be ib_{str(start_time)}.csv')


# Save all data to a csv file
def save_csv():
    csv_string = 'name;addr'

    for i in range(len(names)):
        csv_string += '\n' + ';'.join([names[i], addrs[i]])

    with open('../data/ib_' + str(start_time) + '.csv', 'wb') as f:
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
page_resps = get_urls(page_urls)

# Get the data from each page
for page_resp in page_resps:
    church = json.loads(page_resp.content)['church']
    if not church:
        continue
    elif not church['active'] == 1:
        continue
    else:
        names.append(church['name'])
        addr_list = []
        if 'streedAddress1' in church.keys():
            addr_list.append(church['streedAddress1'])
        if 'streedAddress2' in church.keys():
            addr_list.append(church['streedAddress2'])
        if 'city' in church.keys():
            addr_list.append(church['city'])
        if 'region' in church.keys():
            addr_list.append(church['region'])
        if 'postalCode' in church.keys():
            addr_list.append(church['postalCode'])
        addrs.append(','.join(addr_list))

# Save, print info, and exit
save_csv()
print(f"Done after {round(time.time() - start_time) } seconds")
