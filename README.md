# React Weather App

React Weather App is a React application that provides real-time, hourly, and 8-day weather forecasts for any city across the globe. It leverages the OpenWeather API for weather data and the MapBox API for city search functionality.

## Features

- **Search City**: Using MapBox's SearchBox React component, users can easily find their desired city with autofill suggestions.
- **Current Weather**: Displays the current weather condition including temperature, humidity, wind speed, and more.
- **Hourly Forecast**: Get an hourly forecast to plan your day accordingly.
- **8-Day Forecast**: A detailed 8-day forecast providing an overview of the weather for the upcoming week.
- **Icon Display**: Utilizes FontAwesomeIcon React component for aesthetically pleasing and intuitive icons.
- **Responsive Design**: Works seamlessly across different devices and browsers.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repo
   ```
   git clone https://github.com/ADAidan/React-Weather-App.git
   ```

2. Navigate to the project directory
   ```
   cd react-weather-app
   ```

3. Install dependencies
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your OpenWeather and MapBox API keys
    ```
    REACT_APP_OPENWEATHER_API_KEY=your_openweather_api_key
    REACT_APP_MAPBOX_API_KEY=your_mapbox_api_key
    ```

5. Start the development server
    ```
    npm start
    ```

Your app should now be running on `http://localhost:3000`.

## Built With

- [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)
- [OpenWeather API](https://openweathermap.org/api)
- [MapBox API](https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-geocoder/)
- [React Router DOM](https://reactrouter.com/en/6.15.0/start/overview)
- [Font Awesome](https://fontawesome.com/docs/web/setup/get-started)

## Contributing

If you would like to contribute to this project, please feel free to fork the repository, create a feature branch, and send me a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details