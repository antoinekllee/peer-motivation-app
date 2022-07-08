import { useNavigate } from 'react-router-dom'; 

import RegisterForm from '../components/login/RegisterForm'; 

function RegisterPage (props)
{
    const navigate = useNavigate (); 

    function RegisterHandler (registerData)
    {
        fetch ('/api/user/register', 
        {
            method: "POST", 
            body: JSON.stringify (registerData), 
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
        <h1>Register</h1>
        <RegisterForm OnRegister={RegisterHandler} />
    </section>; 
}

export default RegisterPage; 