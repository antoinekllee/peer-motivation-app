import { useRef } from 'react'; 
import { Link } from 'react-router-dom'; 

import classes from './LoginForm.module.css'
import Card from '../ui/Card';

function LoginForm (props)
{
    const usernameInputRef = useRef (); 
    const passwordInputRef = useRef (); 

    function SubmitHandler (event)
    {
        event.preventDefault (); 

        const enteredEmail = usernameInputRef.current.value; 
        const enteredPassword = passwordInputRef.current.value; 

        const loginData = 
        {
            email: enteredEmail, 
            password: enteredPassword
        }; 

        props.OnLogin (loginData); 
    }

    return <Card>
        <form className={classes.form} onSubmit={SubmitHandler}>
            <div className={classes.control}>
                <label htmlFor='username'>Email</label>
                <input type="email" placeholder = "Email" required id="username" ref={usernameInputRef} />
            </div>

            <div className={classes.control}>
                <label htmlFor='password'>Password</label>
                <input type="password" placeholder = "Password" required id="password" ref={passwordInputRef} />
            </div>
            
            <div className={classes.actions}>
                <button>Login</button>
            </div>
        </form>

        <p>Don't have an account?</p>
        <Link to="/signup">Signup</Link>
    </Card>; 
}

export default LoginForm; 