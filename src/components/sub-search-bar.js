import { useState } from 'react';

function SubSearchBar() {
    const [cityInput, setCityInput] = useState('');

    return(
        <div style={{
            width: '40%', height: '100%'
        }}>
            <input className="form-control" placeholder="Search City" 
            value={cityInput} onChange={(e) => setCityInput(e.target.value)} 
            onSubmit={e => e.preventDefault}></input>
        </div>
    );
}

export default SubSearchBar;