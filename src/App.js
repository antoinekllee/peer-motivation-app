import { Routes, Route } from 'react-router-dom'; 

import Layout from './components/layout/Layout';

import Landing from './pages/Landing';

import Login from './pages/Login'; 
import Signup from './pages/Signup'; 

import Dashboard from './pages/Dashboard'; 

function App ()
{
    return <div>
        <Layout>
            <Routes>
                <Route path='/' element={ <Landing /> } />

                <Route path='/login' element={ <Login /> } />
                <Route path='/signup' element={ <Signup /> } />

                <Route path='/dashboard' element={ <Dashboard /> } />
            </Routes>
        </Layout>
    </div>; 
}

export default App; 