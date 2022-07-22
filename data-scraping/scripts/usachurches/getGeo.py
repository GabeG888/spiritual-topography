# You need to set the mapquest_api environment variable to an api token from https://developer.mapquest.com/plans

import pandas as pd
import requests
import json
import os


df = pd.read_csv("../../data/usachurches.csv")

for i, row in df.iterrows():
    apiAddress = str(df.at[i, 'Address'])
    
    parameters =  {
        "key" : os.getenv('mapquest_api'),
        "location": apiAddress
    }
    response = requests.get('http://www.mapquestapi.com/geocoding/v1/address', params = parameters)
    data = json.loads(response.text)['results']

    lat = data[0]['locations'][0]['latLng']['lat']
    lng = data[0]['locations'][0]['latLng']['lng']
    df.at[i, 'Latitude'] = lat
    df.at[i, 'Longitude'] = lng
    
    
#Save data to CSV with geodata
df.to_csv('../../data/usachurches.csv')
