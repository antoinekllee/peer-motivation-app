import classes from './Dashboard.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import CalendarItem from '../components/calendar/CalendarItem';

import { useState, useEffect } from 'react'; 

function Dashboard ()
{
    const date = new Date (); // current date
    const dateStr = date.toDateString (); 
    
    const firstDayDate = new Date (); // first date of month

    let month = 0; 
    // const [monthIndex, setMonth] = useState(firstDayDate.getMonth ());

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

    let calendarItems = []; 

    const renderCalendar = () => 
    {
        firstDayDate.setDate (1); 
        
        const firstDayIndex = firstDayDate.getDay (); // day of the week index of first day
        const prevLastDay = new Date (firstDayDate.getFullYear(), firstDayDate.getMonth(), 0).getDate (); // last day of last month
        
        const lastDayIndex = new Date (firstDayDate.getFullYear(), firstDayDate.getMonth() + 1, 0).getDay (); // day of the week index of last day
        const nextDayCount = 7 - lastDayIndex - 1; // days to include from next month

        month = months [firstDayDate.getMonth ()]; 
        // setMonth (months [firstDayDate.getMonth ()]); 

        const lastDay = new Date (firstDayDate.getFullYear(), firstDayDate.getMonth() + 1, 0).getDate (); // last day of current month

        calendarItems = []; 

        for (let i = firstDayIndex - 1; i >= 0; i--) 
        {
            const item = 
            {
                day: prevLastDay - i, 
                isToday: false, 
                isOtherMonth: true
            }

            calendarItems.push (item); 
        }

        for (let i = 1; i <= lastDay; i++) 
        {
            const item = 
            {
                day: i, 
                isToday: i == date.getDate (), 
                isOtherMonth: false
            }

            calendarItems.push (item); 
        }

        for (let i = 1; i <= nextDayCount; i++) 
        {
            const item = 
            {
                day: i, 
                isToday: false, 
                isOtherMonth: true
            }

            calendarItems.push (item); 
        }

        console.log (calendarItems);
    }

    // useEffect (renderCalendar, [monthIndex]); 

    renderCalendar (); 

    const prev = () => 
    {
        console.log ("PREV MONTH NOT IMPLEMENTED"); 
        // console.log ("prev month: " + months [firstDayDate.getMonth ()]); 
        // firstDayDate.setMonth (firstDayDate.getMonth () - 1); 
        // setMonth (firstDayDate.getMonth ()); 
        // renderCalendar (); 
    }

    const next = () => 
    {
        console.log ("next month: " + firstDayDate.getMonth ()); 
        console.log ("before " + firstDayDate); 
        console.log ("changing to " + (firstDayDate.getMonth () + 1)); 
        firstDayDate.setMonth (firstDayDate.getMonth () + 1); 
        console.log ("after " + firstDayDate); 
        // setMonth (firstDayDate.getMonth ()); 
        renderCalendar (); 
    }

    return <div className={classes.container}>
        <div className={classes.calendar}>
            <div className={classes.month}>
                <FontAwesomeIcon icon={faAngleLeft} className={classes.prev} onClick={ prev } />
                <div className={classes.date}>
                    {/* <h1>{months [monthIndex]}</h1> */}
                    <h1>{month}</h1>
                    <p>{dateStr}</p>
                </div>
                <FontAwesomeIcon icon={faAngleRight} className={classes.next} onClick={ next } />
            </div>
            <div className={classes.weekdays}>
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
                <div>Sun</div>
            </div>
            <div className={classes.days}>
                {calendarItems.map ((item) => 
                    <CalendarItem 
                        day={item.day}
                        isOtherMonth={item.isOtherMonth}
                        isToday={item.isToday}
                    />)}
            </div>
        </div>
    </div>
}

export default Dashboard; 