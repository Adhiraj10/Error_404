import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Index from "../src/components/Index";
import App from './App';
import LandingPage from './components/LandingPage';
import CodeFrame from './components/CodeFrame';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LandingPage ></LandingPage>
    {/* <CodeFrame/> */}
  </React.StrictMode>
);

