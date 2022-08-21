import { useEffect, useRef } from 'react'; 

import classes from './NewTaskModal.module.css'

function NewTaskModal (props)
{
    const titleInputRef = useRef (); 
    const descriptionInputRef = useRef (); 
    const rewardInputRef = useRef (); 
    const consequenceInputRef = useRef (); 
    const friendInputRef = useRef (); 

    function SubmitHandler (event)
    {
        event.preventDefault (); 

        const enteredTitle = titleInputRef.current.value; 
        const enteredDescription = descriptionInputRef.current.value; 
        const enteredReward = rewardInputRef.current.value; 
        const enteredConsequence = consequenceInputRef.current.value; 
        const enteredFriend = friendInputRef.current.value; 

        const newTaskData = 
        {
            title: enteredTitle, 
            description: enteredDescription, 
            dueDate: props.dueDate,
            reward: enteredReward, 
            consequence: enteredConsequence, 
            // owner: ,
            helper: enteredFriend
        }; 

        AddNewTask (newTaskData); 
    }

    function AddNewTask (newTaskData)
    {
        console.log ("ADD NEW TASK"); 
        console.log (newTaskData); 
        fetch ('/api/tasks/newTask', 
        {
            method: "POST", 
            body: JSON.stringify (newTaskData), 
            headers: { "Content-Type": "application/json" }
        }).then ((response) => 
        {
            if (!response.ok)
                return; 

            // props.updateUserInfo (); 
            // navigate('/dashboard', { replace: true }); 
        }); 
    }


    return <div className={classes.container}>
        <form className={classes.form} onSubmit={SubmitHandler}>
            <div className={classes.control}>
                <label htmlFor='taskName'>Task Name</label>
                <input type="text" placeholder="Task Name" required id="taskName" ref={titleInputRef} />
            </div>

            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <input type="text" placeholder="Description" required id="description" ref={descriptionInputRef} />
            </div>

            <div className={classes.control}>
                <label htmlFor='reward'>Reward</label>
                <input type="text" placeholder="Reward" id="reward" ref={rewardInputRef} />
            </div>

            <div className={classes.control}>
                <label htmlFor='consequence'>Consequence</label>
                <input type="text" placeholder="Consequence" id="consequence" ref={consequenceInputRef} />
            </div>

            <div className={classes.control}>
                <label htmlFor='friend'>Friend</label>
                <select id='friend' required ref={friendInputRef}>
                    <option value="">Please select a friend</option>
                    { props.userInfo.friends.map (({ friend }) => <option value={friend._id} key={friend._id}>{friend.username}</option>) }
                </select>
            </div>

            <div className={classes.actions}>
                <button>Create Task</button>
            </div>
        </form>
        <button className={classes.cancelButton} onClick={props.onCancel}>Cancel</button>
        {/* <button className={classes.confirmButton}>Confirm</button> */ } 
    </div>
}

export default NewTaskModal; 