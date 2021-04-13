import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import { routes } from "./routes/routes";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import {UserContextHOC} from "./components/UserContextHOC";

ReactDOM.render(
  <React.StrictMode>
    <UserContextHOC >
      <BrowserRouter>
        <Header />
        {routes}
      </BrowserRouter>
    </UserContextHOC>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
