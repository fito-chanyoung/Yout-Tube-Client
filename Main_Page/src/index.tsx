import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import { App } from "./App";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
