import { useNavigate } from 'react-router-dom'; 

import RegisterForm from '../components/login/RegisterForm'; 

function RegisterPage ()
{
    const navigate = useNavigate (); 

    function RegisterHandler (registerData)
    {
        console.log (registerData); 

        fetch ('http://localhost:3001/api/user/register', 
        {
            method: "POST", 
            body: JSON.stringify (registerData), 
            headers: { "Content-Type": "application/json" }
        }).then (() => 
        {
            navigate('/dashboard', { replace: true })
        }); 
    }

    return <section>
        <h1>Register</h1>
        <RegisterForm OnRegister={RegisterHandler} />
    </section>; 
}

export default RegisterPage; 