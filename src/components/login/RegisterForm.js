import { useRef } from 'react'; 
import { Link } from 'react-router-dom'; 

import classes from './LoginForm.module.css'

function RegisterForm (props)
{
    const emailInputRef = useRef (); 
    const usernameInputRef = useRef (); 
    const passwordInputRef = useRef (); 
    // const confirmPasswordInputRef = useRef (); 

    function SubmitHandler (event)
    {
        event.preventDefault (); 

        const enteredEmail = emailInputRef.current.value; 
        const enteredUsername = usernameInputRef.current.value; 
        const enteredPassword = passwordInputRef.current.value; 
        // const enteredConfirmPassword = confirmPasswordInputRef.current.value; 

        const registerData = 
        {
            email: enteredEmail, 
            username: enteredUsername, 
            password: enteredPassword, 
            // confirmPassword: enteredConfirmPassword, 
        }; 

        props.OnRegister (registerData); 
    }

    return <div>
        <form className={classes.form} onSubmit={SubmitHandler}>
            <div className={classes.control}>
                <label htmlFor='email'>Email</label>
                <input type="email" placeholder='Email' required id="email" ref={emailInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='username'>Username</label>
                <input type="text" placeholder='Username' required id="username" ref={usernameInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='password'>Password</label>
                <input type="password" placeholder='Password' required id="password" ref={passwordInputRef} />
            </div>
            {/* <div className={classes.control}>
                <label htmlFor='confirm-password'>Confirm Password</label>
                <input type="password" placeholder='Confirm Password' required id="confirm-password" ref={confirmPasswordInputRef} />
            </div> */}
            <div className={classes.actions}>
                <button>Register</button>
            </div>
        </form>
        <br />
        <p>Have an account?</p>
        <Link to="/login">Login</Link>
    </div>; 
}

export default RegisterForm; 