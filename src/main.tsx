import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "assets/styles/index.css";
import "leaflet/dist/leaflet.css";
import App from "./App";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
