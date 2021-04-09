import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.scss';
import './styles/App.scss';
import {routes} from './routes/routes';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          {routes}
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
