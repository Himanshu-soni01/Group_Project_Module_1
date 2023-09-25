/* Import Section - Start */

/* React Imports - Start */

import React from 'react';
import ReactDOM from 'react-dom/client';

/* React Imports -End */

/* Project components Imports - Start */

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* Project components Imports -End */

/* Import Section - End */

/* Render View Return - Start */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

  /* Render View Return - End */
);

reportWebVitals();
