import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Statecontext from "./context/StateContext";

ReactDOM.render(
  <React.StrictMode>
    <Statecontext>
      <App />
    </Statecontext>
  </React.StrictMode>,
  document.getElementById("root")
);
