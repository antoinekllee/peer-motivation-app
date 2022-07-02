import { useRef } from 'react'; 
import { Link } from 'react-router-dom'; 

import classes from './LoginForm.module.css'
import Card from '../ui/Card'; 

function SignupForm (props)
{
    const usernameInputRef = useRef (); 
    const passwordInputRef = useRef (); 
    const confirmPasswordInputRef = useRef (); 

    function SubmitHandler (event)
    {
        event.preventDefault (); 

        const enteredEmail = usernameInputRef.current.value; 
        const enteredPassword = passwordInputRef.current.value; 
        const enteredConfirmPassword = confirmPasswordInputRef.current.value; 

        const signupData = 
        {
            email: enteredEmail, 
            password: enteredPassword, 
            confirmPassword: enteredConfirmPassword, 
        }; 

        props.OnSignup (signupData); 
    }

    return <Card>
        <form className={classes.form} onSubmit={SubmitHandler}>
            <div className={classes.control}>
                <label htmlFor='username'>Email</label>
                <input type="email" placeholder='Email' required id="username" ref={usernameInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='password'>Password</label>
                <input type="password" placeholder='Password' required id="password" ref={passwordInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='confirm-password'>Confirm Password</label>
                <input type="password" placeholder='Confirm Password' required id="confirm-password" ref={confirmPasswordInputRef} />
            </div>
            <div className={classes.actions}>
                <button>Signup</button>
            </div>
        </form>
        <br />
        <p>Have an account?</p>
        <Link to="/login">Login</Link>
    </Card>; 
}

export default SignupForm; 