import classes from './FriendsList.module.css'; 

function FriendsList ()
{
    return <div className={classes.container}>
        <h1>FRIENDS</h1>
        <hr />
        <ul>
            <li>FRIEND A</li>
            <li>FRIEND B</li>
            <li>FRIEND C</li>
            <li>FRIEND D</li>
        </ul>
    </div>; 
}

export default FriendsList; 