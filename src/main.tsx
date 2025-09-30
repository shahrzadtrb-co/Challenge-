//Entry React file to load the entire app and importing the modules 

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//rendering root node
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);