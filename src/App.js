import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar.js';
import SubNavbar from './components/sub-navbar.js';
import HomePage from './components/homepage.js';

function App({ forecast, setForecast, city, setCity }) {
  const [coordinates, setCoordinates] = useState(() => {
    const savedCoordinates = localStorage.getItem('coordinates');
    return savedCoordinates ? JSON.parse(savedCoordinates) : [];
  });

  const API_KEY = process.env.REACT_APP_API_KEY;
  const API = `https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates[0]}&lon=${coordinates[1]}&units=imperial&appid=${API_KEY}`;

  useEffect(() => {
    localStorage.setItem('coordinates', JSON.stringify(coordinates));
  }, [coordinates])

  useEffect(() => {
    localStorage.setItem('city', city);
  }, [city])

  useEffect(() => {
    if (coordinates.length === 0) return;
    fetch(API)
      .then((response) => response.json())
      .then((forecast) => {
        setForecast(forecast);
        console.log(forecast);
      })
      .catch(() => {
        setForecast('');
      });
  }, [API, coordinates.length, setForecast])

  return(
    <div /* style={{
      height: document.innerHeight, minHeight: window.innerHeight
    }} */>
      { forecast ? 
      <Navbar setCity={setCity} city={city} currentTemp={Math.round(forecast.current.temp) + '°F'} setCoordinates={setCoordinates}/> : 
      <Navbar setCity={setCity} setCoordinates={setCoordinates}/> }
      { forecast && <SubNavbar/> }
      { forecast ? <Outlet/> : <HomePage/> }
    </div>
  )
}

export default App;