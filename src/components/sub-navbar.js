import { Link } from 'react-router-dom';
import './sub-navbar.css'

function SubNavbar() {
    return (
        <div className={'sub-navbar'}>
            <Link to='/'>Current</Link>
            <Link to='hourly'>Hourly</Link>
            <Link to='daily'>Week Forecast</Link>
        </div>
    );
}

export default SubNavbar;