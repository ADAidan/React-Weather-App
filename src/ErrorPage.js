import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>Oops, It looks like this page does not exist.</h1>
            <Link to='/'>Return to Home Page</Link>
        </div>
    )
}

export default ErrorPage;