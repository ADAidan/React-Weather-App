import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import Navbar from './components/navbar.js';
import SubNavbar from './components/sub-navbar.js';
import HomePage from './components/homepage.js';
import CurrentWeather from './components/current-weather.js';
import Forecast from './components/forecast.js';
import HourlyForecast from './components/hourly-forecast.js';

function App({ forecast, setForecast, city, setCity }) {
  const [coordinates, setCoordinates] = useState(() => {
    const savedCoordinates = localStorage.getItem('coordinates');
    return savedCoordinates ? JSON.parse(savedCoordinates) : [];
  });
  const [units, setUnits] = useState(['°F', 'mph', 'in', 'mi']);
  const [currentTemp, setCurrentTemp] = useState('');

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
        console.log(forecast);
        setForecast(forecast);
        console.log(API)
        console.log(forecast)
      })
      .catch((error) => {
        console.log(error);
        setForecast('');
      });
  }, [API])

  return(
    <div style={{
      height: document.innerHeight, minHeight: window.innerHeight, 
      backgroundColor: '#f6f6db'
    }}>
      { forecast ? 
      <Navbar setCity={setCity} city={city} currentTemp={Math.round(forecast.current.temp) + '°F'} setCoordinates={setCoordinates}/> : 
      <Navbar setCity={setCity} setCoordinates={setCoordinates}/> }
      { forecast && <SubNavbar/> }
      { forecast ? <Outlet/> : <BeatLoader color='#75b5f9'/> }
    </div>
  )
}

export default App;

/* return(
  <div style={{
      height: document.innerHeight, minHeight: window.innerHeight, 
      backgroundColor: '#f6f6db'
    }}>
    <Router>
      { forecast ? 
      <Navbar setCity={setCity} city={city} currentTemp={Math.round(forecast.current.temp) + '°F'} setCoordinates={setCoordinates}/> : 
      <Navbar setCity={setCity} setCoordinates={setCoordinates}/> }
      { forecast && <SubNavbar/> }
      <Routes>
        <Route path='/' element={ forecast ? 
          <CurrentWeather city={city} current={forecast.current}/> : 
          <HomePage />}/>
        <Route path='/hourly' element={ forecast ? 
          <HourlyForecast hourly={forecast.hourly}/> : 
          <BeatLoader color='#75b5f9'/> }/>
        <Route path='/forecast' element={ forecast ? 
          <Forecast days={forecast.daily}/> : 
          <BeatLoader color='#75b5f9'/> }/>
      </Routes>
    </Router>
  </div>
) */