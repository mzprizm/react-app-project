import React from "react";
import ReactDOM from "react-dom";

import Bridge from "./Components/Bridge";

import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    	<Bridge />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
