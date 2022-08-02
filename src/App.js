//Authors: Gabe Gordon, 
//React frontend for the spiritual topography map
//https://github.com/mapbox/mapbox-react-examples/blob/master/markers-custom/src/Map.js

import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Navbar from "./components/navbar/Navbar.js";
import { BrowserRouter as Router } from "react-router-dom";
import counties_race_pop from './counties_race_pop.json'

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3o0MzAiLCJhIjoiY2w2NTRydHJjMnh1aTNpcDRlaW05dmd6cCJ9.8aFMIwekHEwU9UckleyzlA';
 
export default function App() {
	//Initialize variables
	const mapContainer = useRef(null);
	const [lng, setLng] = useState(-98.6);
	const [lat, setLat] = useState(39.8);
	const [zoom, setZoom] = useState(3);
	 
	useEffect(() => {
		//Create map
		const map = new mapboxgl.Map({
			container: mapContainer.current,
			//style: 'mapbox://styles/gz430/cl6558vg9003i15phej1xoqqg',
			//style: 'mapbox://styles/mapbox/streets-v11',
			style: 'mapbox://styles/mapbox/dark-v10',
			center: [lng, lat],
			zoom: zoom	
		});
		
		//Round lat and lng
		map.on('move', () => {
			setLng(map.getCenter().lng.toFixed(4));
			setLat(map.getCenter().lat.toFixed(4));
			setZoom(map.getZoom().toFixed(2));
		});
		
		//Run when map loads
		map.on('load', () => {
			//Add data on counties with population of different ethnicities
			map.addSource('counties_race_pop', {
				type: 'geojson',
				data: counties_race_pop
			});

			//Choropleth of county population
			map.addLayer({
				id: 'counties_pop',
				type: 'fill',
				source: 'counties_race_pop',
				'paint': {
					'fill-color': {
						'property': 'pop_density',
						'stops':[
							[0, '#000000'],
							[50, '#000022'],
							[100, '#000044'],
							[500, '#000066'],
							[1000, '#000088'],
							[5000, '#0000aa'],
							[10000, '#0000cc'],
							[50000, '#0000ee'],
							[100000, '#0000ff']
						]
					},
					'fill-opacity': 0.75
				}
			});
			
			//Outline between counties
			map.addLayer({
				id: 'counties_outline',
				type: 'line',
				source: 'counties_race_pop',
				paint: {
					"line-color": "#000000",
					"line-width": 1,
				},
				layout: {
					'visibility': 'none'
				}
			});
			
			//Show info when a county is clicked
			map.on('click', 'counties_pop', (e) => {
				const name = e.features[0].properties.name;
				const pop = e.features[0].properties.pop;
				const white_pop = e.features[0].properties.pop_wa;
				const black_pop = e.features[0].properties.pop_ba;
				const indian_pop = e.features[0].properties.pop_ia;
				const asian_pop = e.features[0].properties.pop_aa;
				const islander_pop = e.features[0].properties.pop_na;
				const mixed_pop = e.features[0].properties.pop_tom;
				const hispanic_pop = e.features[0].properties.pop_h;
				const white_percent = Math.round(10 * 100 * white_pop / pop) / 10;
				const black_percent = Math.round(10 * 100 * black_pop / pop) / 10;
				const indian_percent = Math.round(10 * 100 * indian_pop / pop) / 10;
				const asian_percent = Math.round(10 * 100 * asian_pop / pop) / 10;
				const islander_percent = Math.round(10 * 100 * islander_pop / pop) / 10;
				const mixed_percent = Math.round(10 * 100 * mixed_pop / pop) / 10;
				const hispanic_percent = Math.round(10 * 100 * hispanic_pop / pop) / 10;
				const html = `<strong>${name}</strong><p>Population: ${pop}<br>White: ${white_percent}%<br>Black: ${black_percent}%<br>American Indian/Alaskan: ${indian_percent}%
				<br>Asian: ${asian_percent}%<br>Hawaiian/Islander: ${islander_percent}%<br>Mixed: ${mixed_percent}%<br><br>Hispanic: ${hispanic_percent}%</p>`
				new mapboxgl.Popup()
				.setLngLat(e.lngLat)
				.setHTML(html)
				.addTo(map);
			});
			 
			// Change cursor to a pointer when over a county.
			map.on('mouseenter', 'counties_pop', () => {
				map.getCanvas().style.cursor = 'pointer';
			});
			 
			// Change cursor back when it is not over a county.
			map.on('mouseleave', 'counties_pop', () => {
					map.getCanvas().style.cursor = '';
			});
		});
		
	    return () => map.remove();
	}, [])
	
    // useEffect(() => {
    //   const collapsedClass = "nav--collapsed";
    //   const lsKey = "navCollapsed";
    //   const nav = document.querySelector(".nav");
    //   const navBorder = nav.querySelector(".nav__border");
    //   if (localStorage.getItem(lsKey) === "true") {
    //     nav.classList.add(collapsedClass);
    //   }
    //   navBorder.addEventListener("click", () => {
    //     nav.classList.toggle(collapsedClass);
    //     localStorage.setItem(lsKey, nav.classList.contains(collapsedClass));
    //   });
    // });
	
	//Map html
	return (
		<div>
			<div>
				<Router>
					<Navbar />
				</Router>
			</div>
			<div ref={mapContainer} className="map-container" />
		</div>
	);
}