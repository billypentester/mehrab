import {React, useState} from 'react'
import { Route, Routes } from 'react-router-dom'

import Sidebar from './admin/Sidebar'
import Navtop from './admin/Nav';

import Dashboard from './admin/Dashboard'

import AddUni from './admin/AddUni'
import Getuni from './admin/Getuni';
import Updateuni from './admin/Updateuni';
import Deluni from './admin/Deluni';

import Users from './admin/Users'
import Admins from './admin/Admins';

import Contact from './admin/Contact'

import devtools from './admin/Devtool';

import custom from './admin/Custom';

import {UserData}  from "./../Data";
import Devtools from './admin/Devtool';
import Custom from './admin/Custom';

function Admin() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: 'API access per month',
        data: UserData.map((data) => data.request),
        backgroundColor: [
            '#eeee'
        ],
        borderColor: '#eeee',
        borderWidth: 1,
      },
    ],
  }); 

  return (
    
    <div>

      <Sidebar />
      <Navtop  />

      <div id="content" className="col-10 float-end p-0 m-0 textwhite p-4" style={{backgroundColor:'#152e4d'}}>

        <Routes>

            <Route path="/" element={<Dashboard chartData={userData} />} />

            <Route path="/adduni" element={<AddUni />} /> 
            <Route path="/getuni" element={<Getuni />} /> 
            <Route path="/updateuni" element={<Updateuni />} /> 
            <Route path="/deluni" element={<Deluni />} /> 

            <Route path="/admins" element={<Admins />} /> 
            <Route path="/users" element={<Users />} /> 

            <Route path="/contact" element={<Contact />} /> 

            <Route path="/devtools" element={<Devtools />} /> 

            <Route path="/custom" element={<Custom />} /> 

        </Routes>

      </div>

    </div>
  )
}

export default Admin