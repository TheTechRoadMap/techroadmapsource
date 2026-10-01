import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './app/App.jsx';

// Create a root.
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
