import classes from './Dashboard.module.css'

import Calendar from '../components/calendar/Calendar'; 
import FriendsList from '../components/friends/FriendsList';

function Dashboard ()
{
    return <div className={classes.container}>
        <Calendar />
        <FriendsList />
    </div>
}

export default Dashboard; 