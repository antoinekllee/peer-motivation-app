import classes from './FriendsList.module.css'; 

import { useNavigate } from 'react-router-dom'; 
import { useRef } from 'react'; 

import FriendsListItem from './FriendsListItem';

function FriendsList (props)
{
    const friendsList = <ul>{props.userInfo && props.userInfo.friends.map ((friend, index) => (friend.isApproved || (!friend.isRequestor && !friend.isApproved)) && <FriendsListItem friend={friend.friend} isApproved={friend.isApproved} key={index} updateUserInfo={props.updateUserInfo} />)}</ul>; 
    const requestedFriendsList = <ul>{props.userInfo && props.userInfo.friends.map ((friend, index) => friend.isRequestor && !friend.isApproved && <FriendsListItem friend={friend.friend} isApproved={true} key={index} updateUserInfo={props.updateUserInfo} />)}</ul>; 

    const navigate = useNavigate (); 

    const friendIdInputRef = useRef (); 

    function RequestFriend (event)
    {
        event.preventDefault (); 

        const enteredFriendId = friendIdInputRef.current.value; // TODO: CHANGE TO ID INSTEAD OF USERNAME

        fetch (`/api/user/request/${enteredFriendId}`, 
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

    return <div className={classes.container}>
        <h1>FRIENDS</h1>
        <hr />
        { friendsList }
        <br />
        <h1>REQUESTED</h1>
        <hr />
        { requestedFriendsList }
        <br />
        <form className={classes.form} onSubmit={RequestFriend}>
            <div className={classes.control}>
                <label htmlFor='friendId'>Friend</label>
                <input type="text" placeholder = "ID" required id="friendId" ref={friendIdInputRef} />
            </div>
            
            <div className={classes.actions}>
                <button>Request</button>
            </div>
        </form>
    </div>; 
}

export default FriendsList; 