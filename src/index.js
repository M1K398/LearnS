import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import CounterApp from "./components/CounterApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CounterApp value={26}/>
  </React.StrictMode>
);
