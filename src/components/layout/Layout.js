import NavigationBar from './NavigationBar';
import classes from './Layout.module.css'

function Layout (props)
{
    return <div>
        <NavigationBar userInfo={props.userInfo} /> 
        <main>{props.children}</main>
        {/* <main className={classes.main}>{props.children}</main> */}
    </div>
}

export default Layout; 