import pandas as pd
import requests
import json

#read data txt
# data = pd.read_csv('output_list.txt', sep=" ", header=None)
# data.columns = ["Name", "Size", "Address", "More Info"]
df = pd.read_csv("./data-scraping/data/usachurches.csv")
# print(df.head())

#API Call and get the Latitude & Longitude values

for i, row in df.iterrows():
    apiAddress = str(df.at[i, 'Address'])
    
    parameters =  {
        "key" : "5vGx3G8Cvf5NvBuuvcsNQ2POeZ96yM9r",
        "location": apiAddress
    }
    response = requests.get('http://www.mapquestapi.com/geocoding/v1/address', params = parameters)
    data = json.loads(response.text)['results']

    lat = data[0]['locations'][0]['latLng']['lat']
    lng = data[0]['locations'][0]['latLng']['lng']
    df.at[i, 'Latitude'] = lat
    df.at[i, 'Longitude'] = lng
    
    
#Save data to CSV with geodata
df.to_csv('./data-scraping/data/usachurches.csv')
