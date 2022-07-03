import classes from './CalendarItem.module.css'

function CalendarItem (props)
{
    let item = <div>{props.day}</div>; 

    if (props.isOtherMonth)
        item = <div className={classes.otherMonth}>{props.day}</div>; 
    else if (props.isToday)
        item = <div className={classes.today}>{props.day}</div>; 

    return <div className={classes.container}>{item}</div>

    // return item; 
}

export default CalendarItem; 