import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import ErrorPage from './ErrorPage';
import CurrentWeather from './components/current-weather.js';
import HourlyForecast from './components/hourly-forecast.js';
import Forecast from './components/forecast.js';


const Router = () => {
    const [city, setCity] = useState(() => {
        const savedCity = localStorage.getItem('city');
        return savedCity ? savedCity : '';
    });
    const [forecast, setForecast] = useState('');

    const router = createBrowserRouter([
        {
            path: '/',
            element: <App forecast={forecast} setForecast={setForecast} city={city} setCity={setCity}/>,
            children: [
                { index: true, element: <CurrentWeather current={forecast.current} city={city}/> },
                { path: 'hourly', element: <HourlyForecast hourly={forecast.hourly}/> },
                { path: 'daily', element: <Forecast forecast={forecast.daily}/> },
            ],
            errorElement: <ErrorPage />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;