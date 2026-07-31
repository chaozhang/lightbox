import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

const h = React.createElement;

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(h(React.StrictMode, null, h(App)));
}
