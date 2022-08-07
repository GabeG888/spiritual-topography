//Authors: Gabe Gordon, Frank Liu
//React frontend for the spiritual topography map
//https://github.com/mapbox/mapbox-react-examples/blob/master/markers-custom/src/Map.js
import { React, useState } from "react";
import Navbar from "./components/navbar/Navbar.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Stm from "./components/pages/stm";
import Github from "./components/pages/Github";
import ContactUs from "./components/pages/ContactUs";

export default function App() {
  //Map html
  return (
    <div>
      <div>
        <BrowserRouter>
          <Navbar className="z-50" />
          <Routes>  
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/stm" element={<Stm />} />
            <Route path="/github" element={<Github />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
