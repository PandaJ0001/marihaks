import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

process.env.HOST = "0.0.0.0";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
