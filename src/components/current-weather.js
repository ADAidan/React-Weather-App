import React from 'react';
import { formatWindDirection } from '../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import './current-weather.css';

function CurrentWeather({current, city}) {
    let description = null;
    try {
        description = current.weather[0].description;
        description = description.charAt(0).toUpperCase() + description.slice(1);
    }
    catch(err) {
        console.log(err)
    };

    return(
        <div className={'current-container'}>
            { current ? 
            <div className={'current-box'}>
                <h1>{description} in {city}</h1>
                <img className='weather-icon' src={`http://openweathermap.org/img/wn/${current.weather[0].icon}.png`} alt="weather icon"></img>
                <p className='temp'>{Math.round(current.temp)}°F</p>
                <p>Feels like {Math.round(current.feels_like)}°F</p>
                <p>Humidity {current.humidity}%</p>
                <p>Cloud cover {current.clouds}%</p>
                <p><FontAwesomeIcon icon={faWind}/>{formatWindDirection(current.wind_deg)} {Math.round(current.wind_speed)} mph</p>
            </div> :
            <h1>Failed to load Data</h1>
            }
        </div>
    );
}

export default CurrentWeather;