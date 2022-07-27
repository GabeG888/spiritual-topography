#!/usr/bin/env python3
# Author: Gabe Gordon
# Scrapes data from https://stat.pcanet.org/ac/directory/directory.cfm into a csv file


import time
import grequests
from bs4 import BeautifulSoup

names = []
addrs = []
failed_pages = []

chrome_agent = \
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
base_url = "https://stat.pcanet.org/ac/directory/directory.cfm"
start_time = round(time.time())

print(f'Started at {str(start_time)}, output file will be pca_{str(start_time)}.csv')


# Save all data to a csv file
def save_csv():
    csv_string = 'name;addr'

    for i in range(len(names)):
        csv_string += '\n' + ';'.join([names[i], addrs[i]])

    with open('../data/pca_' + str(start_time) + '.csv', 'wb') as f:
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


# Send a post request to each urls with the data asynchronously
def post_urls(urls, data):
    resps = [None]
    tries = 0
    while None in resps:
        tries += 1
        if tries >= 5 and tries % 5 == 0:
            print('Connection error...')
        try:
            reqs = [grequests.post(
                urls[i],
                data=data[i],
                headers={"User-Agent": chrome_agent, 'Content-Type': 'application/x-www-form-urlencoded'})
                    for i in range(min(len(urls), len(data)))]
            resps = grequests.map(reqs)
        except:
            resps = [None]
    return resps

# Get list of states
try:
    base = get_urls([base_url])[0]
    base_soup = BeautifulSoup(base.content, 'html.parser')
    states_div = base_soup.find('select', {'id': 'State'})
    states_soup = BeautifulSoup(str(states_div), 'html.parser')
    states = []
    for state_div in states_soup.find_all('option'):
        if 'Select' not in str(state_div):
            states.append(state_div.text)
except Exception as e:
    print("Error, couldn't get list of states")
    print(e)
    exit()

urls = [base_url] * len(states)
data = [f"State={state}&Presbytery=Select+Presbytery&submit=Search&orderby=1" for state in states]
state_resps = post_urls(urls, data)

for state_resp in state_resps:
    state_soup = BeautifulSoup(state_resp.content, 'html.parser')
    tables = state_soup.find_all('table')
    if not tables or not len(tables) == 4:
        continue
    else:
        table = tables[2]
        table_soup = BeautifulSoup(str(table), 'html.parser')
        rows = table_soup.find_all('tr')
        if not rows or not len(rows) > 1:
            continue
        for row in rows:
            row_soup = BeautifulSoup(str(row), 'html.parser')
            items = row_soup.find_all('td')
            if not items or not len(items) == 9:
                continue
            names.append(items[1].text)
            addrs.append(items[2].text + ',' + items[3].text)

# Save, print info, and exit
save_csv()
print(f"Done after {round(time.time() - start_time) } seconds")