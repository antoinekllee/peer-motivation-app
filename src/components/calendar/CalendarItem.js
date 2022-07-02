import classes from './CalendarItem.module.css'

function CalendarItem (props)
{
    if (props.data.isOtherMonth)
        return <div className={classes.otherMonth}>{props.data.day}</div>
    else if (props.data.isToday)
        return <div className={classes.today}>{props.data.day}</div>
    else
        return <div>{props.data.day}</div>
}

export default CalendarItem; 