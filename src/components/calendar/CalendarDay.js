import classes from './CalendarDay.module.css'

import CalendarTask from './CalendarTask';

function CalendarItem (props)
{
    const taskList = <ul>{props.tasks.map (task => <CalendarTask title={task} />)}</ul>; // make into react component

    let date = <div>{props.day}{taskList}</div>; 

    if (props.isOtherMonth)
        date = <div className={classes.otherMonth}>{props.day}{taskList}</div>; 
    else if (props.isToday)
        date = <div className={classes.today}>{props.day}{taskList}</div>; 

    return <div className={classes.container}>
        {date}
    </div>
}

export default CalendarItem; 