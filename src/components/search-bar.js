import React, { useState } from 'react';
import { SearchBox } from '@mapbox/search-js-react';
import { useNavigate } from 'react-router-dom';

const ACCESS_TOKEN = 'pk.eyJ1IjoiYWlkYW4tZHllciIsImEiOiJjbGp3aTd2b2cwM2d0M3FvN3lidmI5ZGRtIn0.mbPURfBS3RgwKupoxNHRXg';

export function SearchBar({setCity, setCoordinates}) {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleRetrieve = (result) => {
        console.log(result);
        // If there are no features, we don't do anything
        if (!result.features || result.features.length === 0) return;
      
        // Get the first feature from the features array
        const firstFeature = result.features[0];
      
        // Extract the longitude and latitude
        const [longitude, latitude] = firstFeature.geometry.coordinates;
        const city = firstFeature.properties.name;
      
        // Round to 2 decimal places
        const roundedLatitude = Math.round(latitude * 100) / 100;
        const roundedLongitude = Math.round(longitude * 100) / 100;
      
        // You can then use these coordinates for your needs
        // For example, we'll just log them here
        setCoordinates([roundedLatitude, roundedLongitude]);
        console.log(result);
        console.log(`Latitude: ${roundedLatitude}, Longitude: ${roundedLongitude}`);
        setCity(city);
    };

    const handleClear = () => {
        console.log('cleared search');
        localStorage.removeItem('city');
        localStorage.removeItem('coordinates');
        setCity('');
        setCoordinates([]);
        navigate('/');
    };

    return (
        <form onSubmit={handleClear}>
            <SearchBox accessToken={ACCESS_TOKEN} value={value} onChange={setValue}
            onRetrieve={handleRetrieve} options={{
                types: ['place']
            }}/>
        </form>
    );
}

export default SearchBar;