#!/usr/bin/env python3
# Author: Gabe Gordon
# Scrapes data from https://churches.sbc.net/ into a csv file


import time
import grequests
from bs4 import BeautifulSoup


names = []
addrs = []
failed_pages = []

chrome_agent = \
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
base_url = "https://churches.sbc.net/?_paged="
start_time = round(time.time())
pages = 1274

print(f'Started at {str(start_time)}, output file will be sbc_{str(start_time)}.csv')


# Save all data to a csv file
def save_csv():
    csv_string = 'name;addr'

    for i in range(len(names)):
        csv_string += '\n' + ';'.join([names[i], addrs[i]])

    with open('../data/sbc_' + str(start_time) + '.csv', 'wb') as f:
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
page_urls = [base_url + str(i + 1) for i in range(pages)]
page_resps = get_urls(page_urls)
for page_index, page_resp in enumerate(page_resps):
    if page_resp.status_code == 429 or page_resp.status_code == 504:
        failed_pages.append(page_index)

# The website has rate limiting, retry each request that failed until all were successful
# failed_pages is a list of indexes of failed pages
while True:
    page_urls = [base_url + str(i) for i in failed_pages]
    new_page_resps = get_urls(page_urls)
    old_failed_pages = failed_pages
    failed_pages = []
    for new_page_index, new_page_resp in enumerate(new_page_resps):
        if new_page_resp.status_code == 429 or new_page_resp.status_code == 504:
            failed_pages.append(old_failed_pages[new_page_index])
        else:
            page_resps[old_failed_pages[new_page_index]] = new_page_resp
    if len(failed_pages) == 0:
        break

# Get the data from each page
for page_index, page_resp in enumerate(page_resps):
    church_divs = BeautifulSoup(page_resp.content, 'html.parser').find_all(class_='fwpl-col fwpl-col el-e584j')
    for church_index, church_div in enumerate(church_divs):
        div_soup = BeautifulSoup(str(church_div), 'html.parser')
        name_div = div_soup.find(class_='fwpl-item el-69mw2i')
        names.append(name_div.text)
        street = div_soup.find(class_='fwpl-item el-tcd3ur')
        city = div_soup.find(class_='fwpl-item el-rsu39')
        state = div_soup.find(class_='fwpl-item el-gg1c1')
        zip_code = div_soup.find(class_='fwpl-item el-wcp5oo')
        if street and city and state and zip_code:
            addrs.append(','.join([street.text, city.text, state.text, zip_code.text]))
        else:
            addrs.append('')

# Save, print info, and exit
save_csv()
print(f"Done after {round(time.time() - start_time) } seconds")
