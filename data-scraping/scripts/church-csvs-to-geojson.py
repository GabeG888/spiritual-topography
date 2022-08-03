import csv
import os
from os import listdir
from geojson import Feature, Point, FeatureCollection, dump

features = []
filepaths = []
for file in os.listdir('../data'):
    if 'final' in str.lower(file):
        filepaths.append('../data/' + file)

for file in filepaths:
        print('Adding ' + file)
        with open('../data/' + file, 'r', encoding='utf-8-sig') as f:
            reader = csv.DictReader(f)
            for row in reader:
                if 'lon' not in row.keys() or 'lat' not in row.keys():
                    continue
                try:
                    lat = float(row['lat'])
                    lon = float(row['lon'])
                except:
                    continue
                point = Point((lon, lat))

                props = {}
                for prop in ['name', 'addr', 'city', 'state', 'country', 'attend', 'denom']:
                    if prop in row.keys():
                        props[prop] = row[prop]
                features.append(Feature(geometry=point, properties=props))

collection = FeatureCollection(features)
with open('../data/churches.json', 'w') as f:
    dump(collection, f)
