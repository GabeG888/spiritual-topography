#!/usr/bin/env python3
# Author: Gabe Gordon
# Simple tool to map the data from a csv file in a web browser

import plotly.express as px
import pandas as pd

filepath = input('Enter path to csv file: ')

df = pd.read_csv(filepath, on_bad_lines='skip', sep=';')

fig = px.scatter_geo(df, lat='lat', lon='lon', hover_name="name")
fig.update_layout(title=filepath.split('\\')[-1].split('/')[-1], title_x=0.5)
fig.show()
