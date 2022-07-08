import { Routes, Route } from 'react-router-dom'; 

import Layout from './components/layout/Layout';

import Landing from './pages/Landing';

import Login from './pages/Login'; 
import Register from './pages/Register'; 

import Dashboard from './pages/Dashboard'; 

import { useState } from 'react'; 

function App ()
{
    const [userInfo, setUserInfo] = useState (); 

    const updateUserInfo = async() => 
    {
        const response = await fetch ("/api/user/getUser"); 
        const body = await response.json (); 
        
        if (body.status === "SUCCESS")
        {
            setUserInfo (body.message); 
        }
    }

    return <div>
        <Layout userInfo={userInfo}>
            <Routes>
                <Route path='/' element={ <Landing /> } />

                <Route path='/login' element={ <Login updateUserInfo={updateUserInfo} /> } />
                <Route path='/register' element={ <Register updateUserInfo={updateUserInfo} /> } />

                <Route path='/dashboard' element={ <Dashboard /> } />
            </Routes>
        </Layout>
    </div>; 
}

export default App; 