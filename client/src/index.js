import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import { routes } from "./routes/routes";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../src/components/Header/Header";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      {routes}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
