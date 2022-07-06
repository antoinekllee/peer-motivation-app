import classes from './Calendar.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import CalendarDay from './CalendarDay';

import { useState, useEffect } from 'react'; 

function Calendar (props)
{
    const DUMMY_DATA = 
    [
        {
            title: "Task 1", 
            description: "Test task 1", 
            dueDate: new Date (2022, 7, 10), 
            consequence: "Agreed consequence 1", 
            owner: "Person A", 
            heper: "Person B"
        },
        {
            title: "Task 2", 
            description: "Test task 2", 
            dueDate: new Date (2022, 7, 14), 
            consequence: "Agreed consequence 2", 
            owner: "Person B", 
            heper: "Person A"
        },
        {
            title: "Task 3", 
            description: "Test task 3", 
            dueDate: new Date (2022, 7, 14), 
            consequence: "Agreed consequence 3", 
            owner: "Person B", 
            heper: "Person A"
        }
    ];

    // const [isLoading, setIsLoading] = useState (true); 
    // const [loadedTasks, setLoadedTasks] = useState([]); 
    
    // useEffect (() => 
    // {
    //     setIsLoading (true); 

    //     fetch ('')
    //         .then (response =>  response.json ())
    //         .then (data => 
    //         {
    //             const tasks = []; 

    //             for (const key in data)
    //             {
    //                 const task = 
    //                 {
    //                     id: key, 
    //                     ...data[key]
    //                 }; 

    //                 tasks.push (task); 
    //             }

    //             setIsLoading (false); 
    //             setLoadedTasks (tasks); 
    //         }); 
    // }, [])

    // if (isLoading)
    // {
    //     return <section>
    //         <p>Loading...</p>
    //     </section>; 
    // }

    const date = new Date (); // current date
    const dateStr = date.toDateString (); 
    
    const firstDayDate = new Date (); // first date of month

    const months = 
    [
        "January", 
        "Febuary", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"
    ]

    let calendarDays = []; 

    const updateCalendar = () => 
    {
        firstDayDate.setMonth (monthIndex); 

        firstDayDate.setDate (1); 
        
        const firstDayIndex = firstDayDate.getDay (); // day of the week index of first day
        const prevLastDay = new Date (firstDayDate.getFullYear(), firstDayDate.getMonth(), 0).getDate (); // last day of last month
        
        const lastDayIndex = new Date (firstDayDate.getFullYear(), firstDayDate.getMonth() + 1, 0).getDay (); // day of the week index of last day
        const nextDayCount = 7 - lastDayIndex - 1; // days to include from next month

        const lastDay = new Date (firstDayDate.getFullYear(), firstDayDate.getMonth() + 1, 0).getDate (); // last day of current month

        calendarDays = []; 

        for (let i = firstDayIndex - 1; i >= 0; i--) 
        {
            const tasks = DUMMY_DATA.filter (task => task.dueDate.getTime () == new Date (firstDayDate.getFullYear (), firstDayDate.getMonth (),  prevLastDay - i).getTime ()); 

            const day = 
            {
                day: prevLastDay - i, 
                isToday: false, 
                isOtherMonth: true, 
                tasks: ["Task 1", "Task 2", "Task 3"]
                // tasks: tasks
            }

            calendarDays.push (day); 
        }

        for (let i = 1; i <= lastDay; i++) 
        {
            const tasks = DUMMY_DATA.filter (task => 
            {
                const dueDate = task.dueDate.getTime (); 
                const thisDate = new Date (firstDayDate.getFullYear (), firstDayDate.getMonth (),  i).getTime (); 

                console.log (dueDate + " equal to " + thisDate + "?")

                return dueDate == thisDate; 
            }); 
            console.log (tasks); 

            const day = 
            {
                day: i, 
                isToday: i == date.getDate () && firstDayDate.getMonth () == date.getMonth () && firstDayDate.getFullYear () == date.getFullYear (), 
                isOtherMonth: false, 
                tasks: ["Task 1", "Task 2", "Task 3"]
                // tasks: tasks
            }

            calendarDays.push (day); 
        }

        for (let i = 1; i <= nextDayCount; i++) 
        {
            const tasks = DUMMY_DATA.filter (task => task.dueDate.getTime () == new Date (firstDayDate.getFullYear (), firstDayDate.getMonth (),  i).getTime ()); 

            const day = 
            {
                day: i, 
                isToday: false, 
                isOtherMonth: true, 
                tasks: ["Task 1", "Task 2", "Task 3"]
                // tasks: tasks
            }

            calendarDays.push (day); 
        }
    }

    const [monthIndex, setMonthIndex] = useState(firstDayDate.getMonth ());

    updateCalendar (); 

    return <div className={classes.calendar}>
            <div className={classes.month}>
                <FontAwesomeIcon icon={faAngleLeft} className={classes.prev} onClick={ () => setMonthIndex (monthIndex - 1) } />
                <div className={classes.date}>
                    <h1>{months[monthIndex % 12] + (firstDayDate.getFullYear () != date.getFullYear () ? " " + firstDayDate.getFullYear () : "")}</h1>
                    <p>{dateStr}</p>
                </div>
                <FontAwesomeIcon icon={faAngleRight} className={classes.next} onClick={ () => setMonthIndex (monthIndex + 1) } />
            </div>
            <div className={classes.weekdays}>
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
            </div>
            <div className={classes.days}>
                {calendarDays.map ((item) => 
                    <CalendarDay 
                        day={item.day}
                        isOtherMonth={item.isOtherMonth}
                        isToday={item.isToday}
                        tasks={item.tasks}
                    />
                )}
            </div>
        </div>
}

export default Calendar; 