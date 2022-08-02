import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import Navbar from "./components/navbar/Navbar.js";
import { BrowserRouter as Router } from "react-router-dom";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZ3o0MzAiLCJhIjoiY2w2NTRydHJjMnh1aTNpcDRlaW05dmd6cCJ9.8aFMIwekHEwU9UckleyzlA";

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/gz430/cl6558vg9003i15phej1xoqqg",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

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
