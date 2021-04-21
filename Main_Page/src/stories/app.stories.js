import React from "react";
import { BrowserRouter } from "react-router-dom";
import { App } from "../App";

export default {
  title: "YourTube/App",
  component: App,
};

export const Template = (args) => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
