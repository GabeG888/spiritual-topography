#!/usr/bin/env python3
# Author: Gabe Gordon
# Scrapes data from churchangel.com into a csv file
# You need to set the mapbox_token environment variable to an api token from mapbox.com


import time
import grequests
from bs4 import BeautifulSoup


names = []
addrs = []
failed_pages = []

chrome_agent = \
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
base_url = "https://www.episcopalassetmap.org/list?type[church]=church&page="
start_time = round(time.time())
pages = 704

print(f'Started at {str(start_time)}, output file will be eam_{str(start_time)}.csv')


# Save all data to a csv file
def save_csv():
    csv_string = 'name;addr'

    for i in range(len(names)):
        csv_string += '\n' + ';'.join([names[i], addrs[i]])

    with open('../data/eam_' + str(start_time) + '.csv', 'wb') as f:
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
for page_index, page_resp in enumerate(page_resps):
    church_divs = BeautifulSoup(page_resp.content, 'html.parser').find_all(class_='views-row')
    for church_index, church_div in enumerate(church_divs):
        div_soup = BeautifulSoup(str(church_div), 'html.parser')
        name_div = div_soup.find(class_='search-info--place')
        names.append(name_div.text)
        street = div_soup.find(class_='views-field-address-line1')
        city = div_soup.find(class_='views-field-locality-unmodified')
        state = div_soup.find(class_='views-field-administrative-area-unmodified')
        country = div_soup.find(class_='views-field-country-code')
        if street and city and state and country:
            addrs.append(''.join([street.text, city.text, state.text, country.text]))
        else:
            addrs.append('')

# Save, print info, and exit
save_csv()
print(f"Done after {round(time.time() - start_time) } seconds")
