import React from 'react';
import SearchBar from './search-bar';
import './navbar.css';

function Navbar({city, currentTemp, setCity, setCoordinates}) {
    return(
        <div className={'navbar'}>
          <h2 className='city'>{city}</h2>
          <div className='search-bar-container'>
            <SearchBar setCity={setCity} setCoordinates={setCoordinates}/>
          </div>
          <h2 className='temp'>{currentTemp}</h2>
        </div>
      )
}

export default Navbar;