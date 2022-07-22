#!/usr/bin/env python3
# Author: Gabe Gordon
# Scrapes data from churchangel.com into a csv file
# You need to set the mapbox_token environment variable to an api token from mapbox.com


import os
import time
import urllib.parse
import grequests
from bs4 import BeautifulSoup
import json


names = []
addrs = []
lats = []
lons = []

# token = os.getenv('mapbox_token')
base_url = "https://www.churchangel.com/churches-by-zip/"
start_time = round(time.time())

print(f'Started at {str(start_time)}, output file will be churchangel_{str(start_time)}.csv')


# Save all data to a csv file
def save_csv():
    csv_string = 'name;addr'

    for i in range(len(names)):
        csv_string += '\n' + ';'.join([names[i], addrs[i]])

    with open('../data/churchangel_' + str(start_time) + '.csv', 'wb') as f:
        f.write(csv_string.encode())


# Get all urls asynchronously
def get_urls(urls):
    resps = [None]
    tries = 0
    while None in resps:
        tries += 1
        try:
            reqs = (grequests.get(url) for url in urls)
            resps = grequests.map(reqs)
        except:
            resps = [None]
    if tries >= 5 and tries % 5 == 0:
        print('Connection error...')
    return resps


# Get a list of states
html = get_urls([base_url])[0].content
states_soup = BeautifulSoup(html, 'html.parser')
if not states_soup:
    print("No states found... churchangel.com might not be working anymore")
    exit()
states_list_element = states_soup.find('div', {'id':'list'})
if not states_list_element:
    print("No states found... churchangel.com might not be working anymore")
    exit()
states = [state.text.split(' (')[0] for state in states_list_element.find_all('a')]
state_lens = [int(state.text.split(' (')[1][:-1].replace(',','')) for state in states_list_element.find_all('a')]
state_urls = [base_url + state.replace(' ', '-') for state in states]
state_htmls = get_urls(state_urls)

for state_index, state in enumerate(states):
    current_time = round(time.time())
    print(f"Starting {state} - "
          f"{str(state_index + 1)}/{str(len(states))} - "
          f"{state_lens[state_index]} churches - "
          f"{str(current_time - start_time)}s elapsed")

    state_churches = 0

    # Get a list of zip codes in the state
    html = state_htmls[state_index].content

    zips_soup = BeautifulSoup(html, 'html.parser')
    if not zips_soup: continue
    zips_list_element = zips_soup.find('div', {'id': 'list'})
    if not zips_list_element: continue
    zips = [zip_code.text.split(' (')[0] for zip_code in zips_list_element.find_all('a')]
    zip_urls = [base_url + state.replace(' ', '-') + '/' + zip_code for zip_code in zips]
    zip_htmls = get_urls(zip_urls)

    for zip_index in range(len(zips)):
        # Get addresses of churches in the zip code
        html = zip_htmls[zip_index].content

        churches_soup = BeautifulSoup(html, 'html.parser')
        if not churches_soup: continue
        churches_list_element = churches_soup.find('div', {'id': 'list'})
        if not churches_list_element: continue
        new_addrs = [addr.text for addr in churches_list_element.find_all('p')]
        state_churches += len(new_addrs)
        addrs += new_addrs

        # Make a request to the geocoding api for each address at the same time
        #new_addr_urls = \
        #    [f'https://api.mapbox.com/geocoding/v5/mapbox.places/{urllib.parse.quote_plus(new_addr)}'
        #     f'.json?access_token={token}' for new_addr in new_addrs]

        #geocode_resps = get_urls(new_addr_urls)

        # Get lat and lon from the api responses and add everything to the lists
        #for addr_index, geocode_resp in enumerate(geocode_resps):
        #    json_bytes = geocode_resp.content
        #    json_data = json.loads(json_bytes)

        #    found = False

        #    if 'features' not in json_data.keys(): continue
        #    for i in json_data['features']:
        #        if state in str(i):
        #            lats.append(str(i['center'][1]))
        #            lons.append(str(i['center'][0]))
        #            found = True
        #            break
        #    if not found:
        #        lats.append('0')
        #        lons.append('0')

        #    addrs.append(new_addrs[addr_index])
        #    state_churches += 1

        # Get names of churches in the zip code
        for i, new_name in enumerate(churches_list_element.find_all('a')):
            if not new_name.text == 'Edit this Listing' and not new_name.text == 'Claim this Listing':
                names.append(new_name.text)

        print(f'\r{state_churches}/{state_lens[state_index]}', end='')

    save_csv()
    print("\nFinished " + state)
