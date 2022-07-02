import { useNavigate } from 'react-router-dom'; 

import SignupForm from '../components/login/SignupForm'; 

function SignupPage ()
{
    const navigate = useNavigate (); 

    function SignupHandler (signupData)
    {
        console.log (signupData); 

        // fetch ('', 
        // {
        //     method: "POST", 
        //     body: JSON.stringify (signupData), 
        //     headers: { "Content-Type": "application/json" }
        // }).then (() => 
        // {
        navigate('/dashboard', { replace: true })
        // }); 
    }

    return <section>
        <h1>Signup</h1>
        <SignupForm OnSignup={SignupHandler} />
    </section>; 
}

export default SignupPage; 