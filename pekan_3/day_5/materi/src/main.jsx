// src/index.jsx atau src/App.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Bungkus aplikasi Anda dengan BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);