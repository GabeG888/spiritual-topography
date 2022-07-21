#!/usr/bin/env python3
# Author: Gabe Gordon
# Scrapes data from churchangel.com into a csv file
# You need to set the mapbox_token environment variable to an api token from mapbox.com


import os
import time
import urllib.parse
from bs4 import BeautifulSoup
import requests
import json


names = []
addrs = []
lats = []
lons = []

token = os.getenv('mapbox_token')

base_url = "https://www.churchangel.com/churches-by-zip/"

start_time = round(time.time())

print(f'Started at {str(start_time)}, output file will be churchangel_{str(start_time)}.csv')


# Save all data to a csv file
def save_csv():
    csv_string = 'name;addr;lat;lon'

    for i in range(len(names)):
        csv_string += '\n' + ';'.join([names[i], addrs[i], lats[i], lons[i]])

    with open('../data/churchangel_' + str(start_time) + '.csv', 'wb') as f:
        f.write(csv_string.encode())


# Get a list of states
states_soup = BeautifulSoup(requests.get(base_url).content, 'html.parser')
if not states_soup:
    print("No states found... churchangel.com might not be working anymore")
    exit()
states_list_element = states_soup.find('div', {'id':'list'})
if not states_list_element:
    print("No states found... churchangel.com might not be working anymore")
    exit()
states = [state.text.split(' (')[0] for state in states_list_element.find_all('a')]

for state_index, state in enumerate(states):
    print("Starting " + state)
    print("State " + str(state_index) + "/" + str(len(states)))
    current_time = round(time.time())
    print(str(current_time - start_time) + 's elapsed')

    # Get a list of zip codes in the state
    zips_soup = BeautifulSoup(requests.get(base_url + state.replace(' ', '-')).content, 'html.parser')
    if not zips_soup: continue
    zips_list_element = zips_soup.find('div', {'id': 'list'})
    if not zips_list_element: continue
    zips = [zip_code.text.split(' (')[0] for zip_code in zips_list_element.find_all('a')]

    for zip_index, zip_code in enumerate(zips[:5]):
        # Get addresses of churches in the zip code
        churches_soup = \
            BeautifulSoup(requests.get(base_url +    state.replace(' ', '-') + '/' + zip_code).content, 'html.parser')
        if not churches_soup: continue
        churches_list_element = churches_soup.find('div', {'id': 'list'})
        if not churches_list_element: continue
        new_addrs = [addr.text for addr in churches_list_element.find_all('p')]

        for new_addr in new_addrs:
            # Get lat and lon from address, retry if there's a connection problem
            done = False
            while not done:
                try:
                    json_bytes = requests.get(f'https://api.mapbox.com/geocoding/v5/mapbox.places/{urllib.parse.quote_plus(new_addr)}.json?access_token={token}').content
                    done = True
                except:
                    print("Connection Error...")
                    continue
            found = False

            for i in json.loads(json_bytes)['features']:
                if state in str(i):
                    addrs.append(new_addr)
                    lats.append(str(i['center'][1]))
                    lons.append(str(i['center'][0]))
                    found = True
                    break
            if not found:
                addrs.append(new_addr)
                lats.append('0')
                lons.append('0')

        # Get names of churches in the zip code
        for i, new_name in enumerate(churches_list_element.find_all('a')):
            if not new_name.text == 'Edit this Listing' and not new_name.text == 'Claim this Listing':
                names.append(new_name.text)
    save_csv()