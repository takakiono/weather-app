import React from 'react';
import ReactDOM from 'react-dom/client';
import WeatherApp from './WeatherApp';
import Header from './Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <WeatherApp />
  </React.StrictMode>
);