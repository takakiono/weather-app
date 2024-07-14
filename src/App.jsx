import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import WeatherApp from './WeatherApp';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <>
        <Header />
        <div className="App">
            <Routes>
                <Route path="/" exact element={<HomePage />}  />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/searchWeather" element={<WeatherApp />} />
                {/* 他のページのルートを追加 */}
            </Routes>
        </div>
        <Footer />
    </>
  );
}

export default App;