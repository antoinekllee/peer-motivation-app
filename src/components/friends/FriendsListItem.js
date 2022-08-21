import classes from './FriendsListItem.module.css'

import { useNavigate } from 'react-router-dom'; 

function FriendsListItem (props)
{
    // const element = <li>{props.username}</li>; 

    // if (!props.isApproved)
    //     element = <li>{props.username} <button>✔️</button></li>

    const navigate = useNavigate (); 

    function ApproveFriend (event)
    {
        event.preventDefault (); 

        fetch (`/api/user/approve/${props.friend._id}`, 
        {
            method: "PUT"
        }).then ((response) => 
        {
            console.log ("SUCCESS"); 

            if (!response.ok)
                return; 

            props.updateUserInfo (); 
            navigate('/dashboard', { replace: true }); 
        }); 
    }

    function DisapproveFriend (event)
    {
        event.preventDefault (); 

        fetch (`/api/user/disapprove/${props.friend._id}`, 
        {
            method: "PUT"
        }).then ((response) => 
        {
            console.log ("SUCCESS"); 

            if (!response.ok)
                return; 

            props.updateUserInfo (); 
            navigate('/dashboard', { replace: true }); 
        }); 
    }

    if (!props.isApproved)
        return <li>{props.friend.username} <button onClick={ApproveFriend}>✅</button><button onClick={DisapproveFriend}>❌</button></li>; 
    else
        return <li>{props.friend.username}</li>; 
}

export default FriendsListItem; 