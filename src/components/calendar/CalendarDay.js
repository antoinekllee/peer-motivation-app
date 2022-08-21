import classes from './CalendarDay.module.css'

import CalendarTask from './CalendarTask';

import NewTaskModal from '../new_task/NewTaskModal'; 
import Backdrop from '../../components/backdrop/Backdrop'; 

import { useState } from 'react'; 

function CalendarItem (props)
{
    const [ modalIsOpen, setModalIsOpen ] = useState (false); 

    function openNewTaskModal () 
    {
        setModalIsOpen (true); 
    }

    function closeNewTaskModal () 
    {
        setModalIsOpen (false); 
    }


    
    const taskList = <ul>{props.tasks.map ((task, index) => <CalendarTask title={task.title} key={index} />)}</ul>; // make into react component

    let date = <div><p className={classes.date}>{props.day}</p>{taskList}</div>; 

    if (props.isOtherMonth)
        date = <div className={classes.otherMonth}><p className={classes.date}>{props.day}</p>{taskList}</div>; 
    else if (props.isToday)
        date = <div className={classes.today}><p className={classes.date}>{props.day}</p>{taskList}</div>; 

    return <div>
        <div className={classes.container} onClick={openNewTaskModal}>{date}</div>
        {modalIsOpen && <NewTaskModal dueDate={props.date} onCancel={closeNewTaskModal} userInfo={props.userInfo} />}
        {modalIsOpen && <Backdrop onClick={closeNewTaskModal} /> }
    </div>
}

export default CalendarItem; 