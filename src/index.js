import React from "react";
import ReactDOM from "react-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import "./index.css";
import App from "./App";
import Navbar from "./components/navbar/Navbar.js";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(sendToVercelAnalytics);
