import Day from './day.js'
import './forecast.css'

function Forecast({ days }) {
    return(
        <div className={'daily-forecast-container'}>
          {days.map((day, index) => (
            <div key={day.dt}>
            <Day dailyWeather={day} index={index} />
            </div>
          ))}
        </div>
    )
}

export default Forecast;