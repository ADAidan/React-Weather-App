import React, { useState } from 'react';
import { SearchBox } from '@mapbox/search-js-react';
import { useNavigate } from 'react-router-dom';

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

export function SearchBar({setCity, setCoordinates}) {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleRetrieve = (result) => {
        if (!result.features || result.features.length === 0) return;
      
        const firstFeature = result.features[0];
      
        const [longitude, latitude] = firstFeature.geometry.coordinates;
        const city = firstFeature.properties.name;
      
        const roundedLatitude = Math.round(latitude * 100) / 100;
        const roundedLongitude = Math.round(longitude * 100) / 100;
      
        setCoordinates([roundedLatitude, roundedLongitude]);
        setCity(city);
    };

    const handleClear = () => {
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