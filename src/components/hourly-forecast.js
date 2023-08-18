import Hour from './hour'
import './hourly-forecast.css'

function HourlyForecast({ hourly }) {
    return(
        <div className='hourly-container'>
            {hourly.map((hour) => 
                <Hour key={hour.dt} hourlyWeather={hour}/>
            )}
        </div>
    )
}

export default HourlyForecast;