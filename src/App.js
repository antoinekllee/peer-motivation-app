import { Routes, Route } from 'react-router-dom'; 

import Layout from './components/layout/Layout';

import Landing from './pages/Landing';

import Login from './pages/Login'; 
import Register from './pages/Register'; 

import Dashboard from './pages/Dashboard'; 

function App ()
{
    return <div>
        <Layout>
            <Routes>
                <Route path='/' element={ <Landing /> } />

                <Route path='/login' element={ <Login /> } />
                <Route path='/register' element={ <Register /> } />

                <Route path='/dashboard' element={ <Dashboard /> } />
            </Routes>
        </Layout>
    </div>; 
}

export default App; 