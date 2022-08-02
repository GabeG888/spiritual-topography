#!/usr/bin/env python3
# Author: Gabe Gordon
# Takes the data from https://www.census.gov/data/tables/time-series/demo/popest/2010s-counties-detail.html
# and https://github.com/loganpowell/census-geojson/tree/master/GeoJSON and combines them into a geojson file
# with demographic information
# Key for field names:
# https://www2.census.gov/programs-surveys/popest/technical-documentation/file-layouts/2010-2019/cc-est2019-alldata.pdf
import copy
import json
import area

high = 0
# Get the census data

with open('../data/cc-est2019-alldata.csv', 'r') as f:
    csv = f.read().split('\n')[1:-2]

# Get only data from 2019 including all age groups
filtered_csv = []
for line in csv:
    if line.split(',')[5] == '12' and line.split(',')[6] == '0':
        filtered_csv.append(line)

# Get the geojson of counties
with open('../data/counties5m.json', 'r') as f:
    counties_json = json.loads(f.read())

# Deepcopy so that the inner lists aren't references to counties_json
out_json = copy.deepcopy(counties_json)
out_json['features'] = []

# Add the data for each county to that county in the json
for index, feature in enumerate(counties_json['features']):
    county = feature['properties']['NAMELSAD']
    state = feature['properties']['STATE_NAME']

    # Set data when the county is the same
    for line in filtered_csv:
        split_line = line.split(',')
        if split_line[4] == county and split_line[3] == state:
            # Make a dictionary of all the properties
            properties = {}
            properties['name'] = county
            properties['pop'] = int(split_line[7])
            properties['pop_density'] = int(int(split_line[7]) * 1e8 / area.area(feature['geometry']))
            print(properties['pop_density'])
            if properties['pop_density'] > high: high = properties['pop_density']
            print(high)
            properties['pop_wa'] = int(split_line[10]) + int(split_line[11])
            properties['pop_ba'] = int(split_line[12]) + int(split_line[13])
            properties['pop_ia'] = int(split_line[14]) + int(split_line[15])
            properties['pop_aa'] = int(split_line[16]) + int(split_line[17])
            properties['pop_na'] = int(split_line[18]) + int(split_line[19])
            properties['pop_tom'] = int(split_line[20]) + int(split_line[21])
            properties['pop_wac'] = int(split_line[22]) + int(split_line[23])
            properties['pop_bac'] = int(split_line[24]) + int(split_line[25])
            properties['pop_iac'] = int(split_line[26]) + int(split_line[27])
            properties['pop_aac'] = int(split_line[28]) + int(split_line[29])
            properties['pop_nac'] = int(split_line[30]) + int(split_line[31])
            properties['pop_nh'] = int(split_line[32]) + int(split_line[33])
            properties['pop_nhwa'] = int(split_line[34]) + int(split_line[35])
            properties['pop_nhba'] = int(split_line[36]) + int(split_line[37])
            properties['pop_nhia'] = int(split_line[38]) + int(split_line[39])
            properties['pop_nhaa'] = int(split_line[40]) + int(split_line[41])
            properties['pop_nhna'] = int(split_line[42]) + int(split_line[43])
            properties['pop_nhtom'] = int(split_line[44]) + int(split_line[45])
            properties['pop_nhwac'] = int(split_line[46]) + int(split_line[47])
            properties['pop_nhbac'] = int(split_line[48]) + int(split_line[49])
            properties['pop_nhiac'] = int(split_line[50]) + int(split_line[51])
            properties['pop_nhaac'] = int(split_line[52]) + int(split_line[53])
            properties['pop_nhnac'] = int(split_line[54]) + int(split_line[55])
            properties['pop_h'] = int(split_line[56]) + int(split_line[57])
            properties['pop_hwa'] = int(split_line[58]) + int(split_line[59])
            properties['pop_hba'] = int(split_line[60]) + int(split_line[61])
            properties['pop_hia'] = int(split_line[62]) + int(split_line[63])
            properties['pop_haa'] = int(split_line[64]) + int(split_line[65])
            properties['pop_hna'] = int(split_line[66]) + int(split_line[67])
            properties['pop_htom'] = int(split_line[68]) + int(split_line[69])
            properties['pop_hwac'] = int(split_line[70]) + int(split_line[71])
            properties['pop_hbac'] = int(split_line[72]) + int(split_line[73])
            properties['pop_hiac'] = int(split_line[74]) + int(split_line[75])
            properties['pop_haac'] = int(split_line[76]) + int(split_line[77])
            properties['pop_hnac'] = int(split_line[78]) + int(split_line[79])

            # Add the feature and set properties
            out_json['features'].append(copy.deepcopy(feature))
            out_json['features'][-1]['properties'] = properties

            break

# Set geojson filename
out_json['fileName'] = 'counties_race_pop'

# Save
with open('../data/counties_race_pop.json', 'w') as f:
    json.dump(out_json, f)
