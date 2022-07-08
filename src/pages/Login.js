import { useNavigate } from 'react-router-dom'; 

import LoginForm from '../components/login/LoginForm'; 

function Login (props)
{
    const navigate = useNavigate (); 

    function LoginHandler (loginData)
    {
        fetch ('/api/user/login', 
        {
            method: "POST", 
            body: JSON.stringify (loginData), 
            headers: { "Content-Type": "application/json" }
        }).then ((response) => 
        {
            if (!response.ok)
                return; 

            props.updateUserInfo (); 
            navigate('/dashboard', { replace: true }); 
        }); 
    }

    return <section>
        <h1>Login</h1>
        <LoginForm OnLogin={LoginHandler} />
    </section>; 
}

export default Login; 