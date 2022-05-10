import React from "react";
//import ReactDOM from "react-dom";
import { createRoot } from "react-dom/cjs/react-dom.production.min";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
//ReactDOM.render(<App />, document.getElementById("root"));
