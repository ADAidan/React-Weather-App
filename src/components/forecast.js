import { useState } from 'react';
import { formatTimeOfDay, formatDay, formatDayOfWeek, formatWindDirection } from '../utils.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faDroplet, faSun, faMoon, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import Day from './day.js';
import './forecast.css';

function Forecast({ forecast }) {
  const [selectedDay, setSelectedDay] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const days = [...forecast.slice(0, 7)];

  return(
    <div className='daily-forecast-container'>
      { windowWidth > 1000 &&
      <div className='daily-main-view'>
        <div className='more-info-daily'>
          <p className='summary'>{days[selectedDay].summary}</p>
          <div className={'day'}>
              <h4>Day <FontAwesomeIcon icon={faSun} /></h4>
              <h4>{Math.round(days[selectedDay].temp.day)}°</h4>
              <p>Feels like {Math.round(days[selectedDay].feels_like.day)}°</p>
              <p>Sunrise {formatTimeOfDay(days[selectedDay].sunrise)} Sunset {formatTimeOfDay(days[selectedDay].sunset)}</p>
          </div>
          <div className={'night'}>
              <h4>Night <FontAwesomeIcon icon={faMoon} /></h4>
              <h4>{Math.round(days[selectedDay].temp.night)}°</h4>
              <p>Feels like {Math.round(days[selectedDay].feels_like.night)}°</p>
              <p>Moonrise {formatTimeOfDay(days[selectedDay].moonrise)} Moonset {formatTimeOfDay(days[selectedDay].moonset)}</p>
          </div>
          <p><FontAwesomeIcon icon={faDroplet} />{Math.round(days[selectedDay].pop * 100)}%</p>
          <p><FontAwesomeIcon icon={faWind}/>{formatWindDirection(days[selectedDay].wind_deg)} {Math.round(days[selectedDay].wind_speed)} mph</p>
          <p className='humidity'>Humidity {Math.round(days[selectedDay].humidity)}%</p>
          <p className='uv-index'>UV Index {Math.round(days[selectedDay].uvi)}</p>
          <div className='percipitation'>
              { days[selectedDay].rain && <p><FontAwesomeIcon icon={faDroplet}/>{days[selectedDay].rain} mm</p> }
              { days[selectedDay].snow && <p><FontAwesomeIcon icon={faSnowflake}/>{days[selectedDay].snow} mm</p> }
          </div>
        </div>
      </div> }
      <div className='daily-boxes'>
        {days.slice(0, 7).map((day, index) => (
          <Day 
            dailyWeather={day} 
            index={index} 
            key={day.dt} 
            setSelectedDay={setSelectedDay}
            windowWidth={windowWidth}
            setWindowWidth={setWindowWidth}
            className='main-background'
          />
        ))}
      </div>
    </div>
  )
}

export default Forecast;