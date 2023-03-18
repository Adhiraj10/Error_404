import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Code from './components/Code.js';
import App from './App';
import MainShop from './components/MainShop';
import ProductDetails from './components/productDetails';
import LandingPage from './components/LandingPage';

ReactDOM.render(
  <React.StrictMode>
    <Code />
  </React.StrictMode>,
  document.getElementById('root')
);

