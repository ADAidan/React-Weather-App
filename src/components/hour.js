import { useState } from 'react';
import { formatHour, formatWindDirection } from '../utils.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faDroplet } from '@fortawesome/free-solid-svg-icons';
import './hour.css';

function Hour({hourlyWeather}) {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!isExpanded);
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            toggleExpanded();
        }
    }

    return(
        <div className={`hourly-box ${isExpanded ? 'expanded' : ''}`}>
            <div className='hourly-wrapper' onClick={toggleExpanded} onKeyDown={handleKeyDown} tabIndex={0}>
                <h4>{formatHour(hourlyWeather.dt)}</h4>
                <h4>{Math.round(hourlyWeather.temp)}°F</h4>
                <div className='description-container'>
                    <img className='small-weather-icon' src={`https://openweathermap.org/img/wn/${hourlyWeather.weather[0].icon}.png`} alt="weather icon"></img>
                    <p className=''>{hourlyWeather.weather[0].description}</p>
                </div>
                <p><FontAwesomeIcon icon={faDroplet} />{Math.round(hourlyWeather.pop * 100)}%</p>
                <p><FontAwesomeIcon icon={faWind}/>{formatWindDirection(hourlyWeather.wind_deg)} {Math.round(hourlyWeather.wind_speed)} mph</p>
            </div>
            { isExpanded &&
            <div className='more-info-hourly'>
                <p><FontAwesomeIcon icon={faDroplet} />{Math.round(hourlyWeather.pop * 100)}%</p>
                <p><FontAwesomeIcon icon={faWind}/>{formatWindDirection(hourlyWeather.wind_deg)} {Math.round(hourlyWeather.wind_speed)} mph</p>
                <p>Feels like {Math.round(hourlyWeather.feels_like)}°F</p>
                <p>Humidity {hourlyWeather.humidity}%</p>
                <p>Pressure {hourlyWeather.pressure} hPa</p>
                <p>Cloud cover {hourlyWeather.clouds}%</p>
                <p>UV index {Math.round(hourlyWeather.uvi)}</p>
            </div> }
        </div>
    )
}

export default Hour;