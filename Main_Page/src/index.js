import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(_jsx(StrictMode, { children: _jsx(BrowserRouter, { children: _jsx(App, {}, void 0) }, void 0) }, void 0), document.getElementById("root"));
//# sourceMappingURL=index.js.map