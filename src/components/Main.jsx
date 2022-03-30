import {React} from 'react'
import { Route, Routes } from 'react-router-dom'

import './main/Landing.css'

import Index from './main/Index'
import UserLogin from './login/UserLogin'
import UserReg from './register/UserReg'
import Navbar from './main/Navbar'

function Main() {

  return (
    <div>

      <Navbar />

      <Routes>

        <Route exact path="/" element={ <Index /> } />
        <Route path="/register" element={  <UserReg />} />
        <Route path="/login" element={<UserLogin />} />

      </Routes>

    </div>
  )
}

export default Main