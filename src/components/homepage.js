import { useState } from 'react';
import { BeatLoader } from 'react-spinners';
import SearchBar from './search-bar';
import NavBar from './navbar';
import SubNavbar from './sub-navbar';
import CurrentWeather from './current-weather';
import Forecast from './forecast';

function HomePage({ city, forecast, units, setCity, setCoordinates }) {

    return (
        <div style={{
            height: window.innerHeight, backgroundColor: '#f6f6db'
        }}>
            <h1 style={{
                color: '#800020', textAlign: 'center', paddingTop: '5%'
            }}>Welcome, search a city to see the current weather or forecast.</h1>
        </div>
    );
}

export default HomePage;

/* <input className={"form-control"} 
    type="text" placeholder="Search..." 
    onChange={e => setInput(e.target.value)} value={Input}
    style={{
        width: '60%', height: '10%', alignItems: 'center'
}}/> */