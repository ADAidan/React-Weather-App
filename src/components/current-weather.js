import React, { useEffect, useState } from 'react';
import { formatDayOfWeek, formatWindDirection } from '../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import Day from './day';
import RainfallChart from './rainfall-chart';
import './current-weather.css';

function CurrentWeather({current, dailyForecast, city}) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [chartData, setChartData] = useState([]);

    let description = null;
    try {
        description = current.weather[0].description;
        description = description.charAt(0).toUpperCase() + description.slice(1);
    }
    catch(err) {
        console.log('failed to load data');
    };

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const days = [...dailyForecast.slice(0, 7)];

    useEffect(() => {
        let newPrecipitationData = [];
        for (const day in dailyForecast) {
            let dayData = {};
            dayData['day'] = formatDayOfWeek(dailyForecast[day].dt);
            if (newPrecipitationData.length === 7) {
                break;
            }
            if (dailyForecast[day].rain) {
                dayData['precipitation'] = dailyForecast[day].rain;
            } else if (dailyForecast[day].snow) {
                dayData['precipitation'] = dailyForecast[day].snow;
            } else {
                dayData['precipitation'] = 0;
            }
            dayData['maxTemperature'] = dailyForecast[day].temp.max;
            dayData['minTemperature'] = dailyForecast[day].temp.min;
            newPrecipitationData.push(dayData);
        }
        setChartData(newPrecipitationData);
    }, [dailyForecast]);

    console.log(chartData)
    return(
        <div className='current-container'>
            { current ? 
            <div className='current-box'>
                <h1 className='current-description'>{description} in {city}</h1>
                <div className='main-current-info'>
                    <p className='temp'>{Math.round(current.temp)}°F</p>
                    <img className='large-weather-icon' src={`https://openweathermap.org/img/wn/${current.weather[0].icon}.png`} alt="weather icon"></img>
                </div>
                <div className='more-current-info'>
                    <p>Feels like {Math.round(current.feels_like)}°F</p>
                    <p>Humidity {current.humidity}%</p>
                    <p>Cloud cover {current.clouds}%</p>
                    <p>UV Index {Math.round(current.uvi)}</p>
                    <p><FontAwesomeIcon icon={faWind}/>{formatWindDirection(current.wind_deg)} {Math.round(current.wind_speed)} mph</p>
                </div>
            </div> :
            <h1>Failed to load Data</h1>
            }
            { current && windowWidth > 1000 &&
            <RainfallChart data={chartData}/> }
            { current && windowWidth > 1000 && 
            <div className='daily-boxes'>
            {days.slice(0, 7).map((day) => (
              <Day 
                dailyWeather={day} 
                key={day.dt} 
              />
            ))}
          </div>
          }
        </div>
    );
}

export default CurrentWeather;