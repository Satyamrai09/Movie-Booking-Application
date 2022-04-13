import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./screens/home/Home";
import reportWebVitals from "./reportWebVitals";
import Details from "./screens/details/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PinDropSharp } from "@material-ui/icons";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<Details />} />
      </Routes>
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
