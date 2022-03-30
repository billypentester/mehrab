import {React} from 'react';
import { Route, Routes } from 'react-router-dom'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'

import Main from './components/Main';
import Login from './components/login/Adminlogin'
import Admin from './components/Admin'
import Search from './components/finder/Search'


function App()
{
    return(
        <>
            <Routes>
                <Route path="/*" element={ <Main /> } />
                <Route path="/admin/*" element={  <Admin />} />
                <Route path="/adminlogin" element={<Login />} />
                <Route path="/finder" element={<Search />}/>
            </Routes>
        </>
    )
}

export default App