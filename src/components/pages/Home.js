import React, { useRef, useEffect, useState } from "react";
import "../../App.css";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import counties_race_pop from "../../counties_race_pop.json";
import churches from "../../churches.json";
import Sidebar from '../sidebar/Sidebar.js'


mapboxgl.accessToken =
  "pk.eyJ1IjoiZ3o0MzAiLCJhIjoiY2w2NTRydHJjMnh1aTNpcDRlaW05dmd6cCJ9.8aFMIwekHEwU9UckleyzlA";

export default function Home() {
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
      //style: 'mapbox://styles/mapbox/dark-v10',
      style: 'mapbox://styles/mapbox/outdoors-v11',
      center: [lng, lat],
      zoom: zoom,
      projection: "globe",
    });
    
    //Background styling
    map.on('style.load', () => {
        map.setFog({
            color: 'rgb(186, 210, 235)',
            'high-color': 'rgb(36, 92, 223)',
            'horizon-blend': 0.02,
            'space-color': 'rgb(11, 11, 25)', 
            'star-intensity': 0.6
        });
    });

    //Round lat and lng
    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    //Run when map loads
    map.on("load", () => {
      
      //Add church data
      map.addSource("churches", {
        type: "geojson",
        data: churches,
      });
    
      //Add church data with clusters
      map.addSource("churchesCluster", {
        type: "geojson",
        data: churches,
        cluster: true,
        clusterMaxZoom: 8,
        clusterRadius: 1,
      });

      //Add data on counties with population of different ethnicities
      map.addSource("counties_race_pop", {
        type: "geojson",
        data: counties_race_pop,
      });

      //Choropleth of county population
      map.addLayer({
        id: "counties_pop",
        type: "fill",
        source: "counties_race_pop",
        paint: {
          "fill-color": {
            property: "pop_density",
            stops: [
              [0, "#000000"],
              [50, "#000022"],
              [100, "#000044"],
              [500, "#000066"],
              [1000, "#000088"],
              [5000, "#0000aa"],
              [10000, "#0000cc"],
              [50000, "#0000ee"],
              [100000, "#0000ff"],
            ],
          },
          "fill-opacity": 0.75,
        },
        layout: {
          visibility: "visible",
        },
      });

      //Outline between counties
      map.addLayer({
        id: "counties_outline",
        type: "line",
        source: "counties_race_pop",
        paint: {
          "line-color": "#000000",
          "line-width": 1,
        },
        layout: {
          visibility: "none",
        },
      });

      //Churches
      map.addLayer({
        id: "churches_basic",
        type: "circle",
        source: "churches",
        paint: {
          "circle-color": "#dd3333",
          "circle-radius": {
            stops: [
              [8, 1],
              [11, 6],
              [16, 40],
            ],
          },
        },
        layout: {
          visibility: "none",
        },
      });
      
      //Churches
      map.addLayer({
        id: "churches_cluster",
        type: "circle",
        source: "churchesCluster",
        paint: {
          "circle-color": "#dd3333",
          "circle-radius": {
            stops: [
              [8, 1],
              [11, 6],
              [16, 40],
            ],
          },
        },
        layout: {
          visibility: "visible",
        },
      });
      
      document.getElementById('clustering-toggle').onchange = function (e) {
        if(this.checked){
          map.setLayoutProperty('churches_cluster', 'visibility', 'visible');
          map.setLayoutProperty('churches_basic', 'visibility', 'none');
        }
        else {
          map.setLayoutProperty('churches_cluster', 'visibility', 'none');
          map.setLayoutProperty('churches_basic', 'visibility', 'visible');
        }
      }
      
      document.getElementById('clustering-toggle').checked = true;
    });

    //Show info when a county is clicked
    map.on("click", ["churches_basic", "churches_cluster"], (e) => {
      e.churchClicked = true;
      var properties = e.features[0].properties;
      var keys = Object.keys(properties);
      var html = "";
      if (keys.includes("name"))
        html += `<strong>${properties["name"]}</strong><br>`;
      if (keys.includes("addr")) html += `Address: ${properties["addr"]}<br>`;
      if (keys.includes("city")) html += `City: ${properties["city"]}<br>`;
      if (keys.includes("state")) html += `State: ${properties["state"]}<br>`;
      if (keys.includes("country"))
        html += `Country: ${properties["country"]}<br>`;
      if (keys.includes("attend"))
        html += `Attendees: ${properties["attend"]}<br>`;
      if (keys.includes("denom"))
        html += `Denomination: ${properties["denom"]}<br>`;
      new mapboxgl.Popup().setLngLat(e.lngLat).setHTML(html).addTo(map);
    });
    
    

    // Change cursor to a pointer when over a county.
    map.on("mousemove", "churches_basic", () => {
      map.getCanvas().style.cursor = "pointer";
    });

    // Change cursor back when it is not over a county.
    map.on("mouseleave", "churches_basic", () => {
      map.getCanvas().style.cursor = "";
    });

    //Show info when a county is clicked
    map.on("click", "counties_pop", (e) => {
      if (e.churchClicked) return;
      const name = e.features[0].properties.name;
      const pop = e.features[0].properties.pop;
      const white_pop = e.features[0].properties.pop_wa;
      const black_pop = e.features[0].properties.pop_ba;
      const indian_pop = e.features[0].properties.pop_ia;
      const asian_pop = e.features[0].properties.pop_aa;
      const islander_pop = e.features[0].properties.pop_na;
      const mixed_pop = e.features[0].properties.pop_tom;
      const hispanic_pop = e.features[0].properties.pop_h;
      const white_percent = Math.round((10 * 100 * white_pop) / pop) / 10;
      const black_percent = Math.round((10 * 100 * black_pop) / pop) / 10;
      const indian_percent = Math.round((10 * 100 * indian_pop) / pop) / 10;
      const asian_percent = Math.round((10 * 100 * asian_pop) / pop) / 10;
      const islander_percent =
        Math.round((10 * 100 * islander_pop) / pop) / 10;
      const mixed_percent = Math.round((10 * 100 * mixed_pop) / pop) / 10;
      const hispanic_percent =
        Math.round((10 * 100 * hispanic_pop) / pop) / 10;
      const html = `<strong>${name}</strong><p>Population: ${pop}<br>White: ${white_percent}%<br>Black: ${black_percent}%<br>American Indian/Alaskan: ${indian_percent}%
      <br>Asian: ${asian_percent}%<br>Hawaiian/Islander: ${islander_percent}%<br>Mixed: ${mixed_percent}%<br><br>Hispanic: ${hispanic_percent}%</p>`;
      new mapboxgl.Popup().setLngLat(e.lngLat).setHTML(html).addTo(map);
    });

    // Change cursor to a pointer when over a county.
    map.on("mousemove", "counties_pop", () => {
      map.getCanvas().style.cursor = "pointer";
    });

    // Change cursor back when it is not over a county.
    map.on("mouseleave", "counties_pop", () => {
      map.getCanvas().style.cursor = "";
    });

    return () => map.remove();
  }, []);

  return (
      <>
        <div ref={mapContainer} className="map-container" />
       // <div className="flex flex-col items-center justify-center py-2"><Sidebar /></div>
      </>
  );
}
