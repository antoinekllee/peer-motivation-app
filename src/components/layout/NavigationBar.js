import { Link } from 'react-router-dom'; 
// import { useContext } from 'react/cjs/react.production.min'; 

import classes from './NavigationBar.module.css'; 
// import FavouritesContext from '../../store/favourites-context';

function NavigationBar (props)
{
    // const favouritesContext = useContext (FavouritesContext); 

    return <header className={ classes.header }>
        <div className={ classes.logo }>Peer-Motivation App</div>
        <nav>
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                {props.userInfo && <li>
                    <Link to="/settings">{props.userInfo.username}</Link>
                </li>}
            </ul>
        </nav>
    </header>
}

export default NavigationBar; 