import { useNavigate } from 'react-router-dom'; 

import LoginForm from '../components/login/LoginForm'; 

function Login ()
{
    const navigate = useNavigate (); 

    function LoginHandler (loginData)
    {
        console.log (loginData); 

        // fetch ('', 
        // {
        //     method: "POST", 
        //     body: JSON.stringify (loginData), 
        //     headers: { "Content-Type": "application/json" }
        // }).then (() => 
        // {
            navigate('/dashboard', { replace: true })
        // }); 
    }

    return <section>
        <h1>Login</h1>
        <LoginForm OnLogin={LoginHandler} />
    </section>; 
}

export default Login; 