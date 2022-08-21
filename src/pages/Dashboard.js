import classes from './Dashboard.module.css'

import Calendar from '../components/calendar/Calendar'; 
import FriendsList from '../components/friends/FriendsList';
// import NewTaskModal from '../components/new_task/NewTaskModal';
// import Backdrop from '../components/backdrop/Backdrop';

// import { useState } from 'react'; 

function Dashboard (props)
{
    // const [ modalIsOpen, setModalIsOpen ] = useState (false); 

    // function openNewTaskModal () 
    // {
    //     setModalIsOpen (true); 
    // }

    // function closeNewTaskModal () 
    // {
    //     setModalIsOpen (false); 
    // }

    return <div className={classes.container}>
        <Calendar userInfo={props.userInfo} />
        {/* <button onClick={openNewTaskModal}>Open NewTaskModal</button> */}
        <FriendsList userInfo={props.userInfo} updateUserInfo={props.updateUserInfo} />
        {/* {modalIsOpen && <NewTaskModal onCancel={closeNewTaskModal} />}
        {modalIsOpen && <Backdrop onClick={closeNewTaskModal} /> } */}
    </div>
}

export default Dashboard; 