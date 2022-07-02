import classes from './Dashboard.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import CalendarItem from '../components/calendar/CalendarItem';

function Dashboard ()
{
    const date = new Date (); // current date
    // alert (date.getDate())
    const dateStr = date.toDateString (); 

    const firstDate = new Date (); // first date of month

    let month = 0; 
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

    let prevDays = []; 
    let days = []; 
    let todayIndex = 0; 
    let nextDays = []; 

    let calendarItemData = []; 

    const renderCalendar = () => 
    {
        firstDate.setDate (1); 
        
        const firstDayIndex = firstDate.getDay (); // day of the week index of first day
        const prevLastDay = new Date (firstDate.getFullYear(), firstDate.getMonth(), 0).getDate (); // last day of last month
        
        const lastDayIndex = new Date (firstDate.getFullYear(), firstDate.getMonth() + 1, 0).getDay (); // day of the week index of last day
        const nextDayCount = 7 - lastDayIndex - 1; // days to include from next month

        month = months [firstDate.getMonth ()]; 

        const lastDay = new Date (firstDate.getFullYear(), firstDate.getMonth() + 1, 0).getDate (); // last day of current month

        calendarItemData = []; 

        for (let i = firstDayIndex - 1; i >= 0; i--) 
        {
            const data = 
            {
                day: prevLastDay - i, 
                isToday: false, 
                isOtherMonth: true
            }

            calendarItemData.push (data); 
        }

        for (let i = 1; i <= lastDay; i++) 
        {
            const data = 
            {
                day: i, 
                isToday: i == date.getDate (), 
                isOtherMonth: false
            }

            calendarItemData.push (data); 
        }

        for (let i = 1; i <= nextDayCount; i++) 
        {
            const data = 
            {
                day: i, 
                isToday: false, 
                isOtherMonth: true
            }

            calendarItemData.push (data); 
        }

        // prevDays = []; 
        // for (let i = firstDayIndex - 1; i >= 0; i--) 
        //     prevDays.push (prevLastDay - i); 
        
        // days = []; 
        // let currentIndex = 0; 
        // for (let i = 1; i <= lastDay; i++) 
        // {
        //     if (i == date.getDate ())
        //         todayIndex = currentIndex; 

        //     days.push (i); 
        //     currentIndex += 1; 
        // }

        // nextDays = []; 
        // for (let i = 1; i <= nextDayCount; i++) 
        //     nextDays.push (i); 
    }

    renderCalendar (); 

    const prev = () => 
    {
        firstDate.setMonth (firstDate.getMonth () - 1); 
        renderCalendar (); 
    }

    const next = () => 
    {
        firstDate.setMonth (firstDate.getMonth () + 1); 
        renderCalendar (); 
    }

    return <div className={classes.container}>
        <div className={classes.calendar}>
            <div className={classes.month}>
                <FontAwesomeIcon icon={faAngleLeft} className={classes.prev} onClick={ prev } />
                <div className={classes.date}>
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
                {calendarItemData.map ((data) => <CalendarItem data={data} />)}

                

                {/* {prevDays.map (day => (
                    <div className={classes.prevDate}>{day}</div>
                ))}

                {days.map ((day, index) => 
                {
                    if (index == todayIndex)
                        return <div className={classes.today}>{day}</div>
                    else
                       return <div>{day}</div>
                })}

                {nextDays.map (day => (
                    <div className={classes.nextDate}>{day}</div>
                ))} */}
            </div>
        </div>
    </div>
}

export default Dashboard; 