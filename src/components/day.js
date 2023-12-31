import { useEffect, useState } from 'react';
import { formatTimeOfDay, formatDay, formatDayOfWeek, formatWindDirection } from '../utils.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faDroplet, faSun, faMoon, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import './day.css';

function Day({dailyWeather, index, setSelectedDay, windowWidth, setWindowWidth, className, clickable}) {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        if (windowWidth > 1000 && clickable) {
            setSelectedDay(index);
        }
        if (windowWidth < 1000 && clickable) {
            setExpanded(!isExpanded);
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            toggleExpanded();
        }
    }

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    return(
        <div className={`daily-box ${className} ${isExpanded && 'expanded'}`}>
            <div className={`daily-wrapper ${clickable && 'clickable'}`} 
            onClick={toggleExpanded} onKeyDown={handleKeyDown} tabIndex={0}>
                <h4 className='time'>{formatDayOfWeek(dailyWeather.dt)} {formatDay(dailyWeather.dt)}</h4>
                <div className='temp-container'>
                    <p className='high'>{Math.round(dailyWeather.temp.max)}°</p>
                    <p>/</p>
                    <p className='low'>{Math.round(dailyWeather.temp.min)}°</p>
                </div>
                <div className='description-container'>
                    <img className={ windowWidth < 1000 ? 
                        'small-weather-icon' : 
                        'medium-weather-icon' } src={`https://openweathermap.org/img/wn/${dailyWeather.weather[0].icon}.png`} alt="weather icon"></img>
                    { windowWidth < 1000 &&
                    <p className=''>{dailyWeather.weather[0].description}</p> }
                </div>
                { windowWidth < 1000 &&
                <p><FontAwesomeIcon icon={faDroplet} />{Math.round(dailyWeather.pop * 100)}%</p> }
                { windowWidth < 1000 &&
                <p><FontAwesomeIcon icon={faWind}/>{formatWindDirection(dailyWeather.wind_deg)} {Math.round(dailyWeather.wind_speed)} mph</p> }
            </div>
            { isExpanded && 
            <div className='more-info-daily'>
                <p className='summary'>{dailyWeather.summary}</p>
                <div className={'day'}>
                    <h4>Day <FontAwesomeIcon icon={faSun} /></h4>
                    <h4>{Math.round(dailyWeather.temp.day)}°</h4>
                    <p>Feels like {Math.round(dailyWeather.feels_like.day)}°</p>
                    <p>Sunrise {formatTimeOfDay(dailyWeather.sunrise)} Sunset {formatTimeOfDay(dailyWeather.sunset)}</p>
                </div>
                <div className={'night'}>
                    <h4>Night <FontAwesomeIcon icon={faMoon} /></h4>
                    <h4>{Math.round(dailyWeather.temp.night)}°</h4>
                    <p>Feels like {Math.round(dailyWeather.feels_like.night)}°</p>
                    <p>Moonrise {formatTimeOfDay(dailyWeather.moonrise)} Moonset {formatTimeOfDay(dailyWeather.moonset)}</p>
                </div>
                <p><FontAwesomeIcon icon={faDroplet} />{Math.round(dailyWeather.pop * 100)}%</p>
                <p><FontAwesomeIcon icon={faWind}/>{formatWindDirection(dailyWeather.wind_deg)} {Math.round(dailyWeather.wind_speed)} mph</p>
                <p className='humidity'>Humidity {Math.round(dailyWeather.humidity)}%</p>
                <p className='uv-index'>UV Index {Math.round(dailyWeather.uvi)}</p>
                <div className='percipitation'>
                    { dailyWeather.rain && <p><FontAwesomeIcon icon={faDroplet}/>{dailyWeather.rain} mm</p> }
                    { dailyWeather.snow && <p><FontAwesomeIcon icon={faSnowflake}/>{dailyWeather.snow} mm</p> }
                </div>
            </div>
            }
        </div>
    )
}

export default Day;