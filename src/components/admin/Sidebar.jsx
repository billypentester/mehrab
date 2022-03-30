import {React} from 'react'
import { Link } from 'react-router-dom';

import './admin.css'

const getID = (e) => {

    var tags = document.getElementsByName("childs")

    for(var i = 0; i < tags.length; i++) {
        tags[i].style.backgroundColor=""
    }

    e.currentTarget.style.backgroundColor="#1e40af"
}

function Sidebar() {
  return (
    <nav id="sider" className='sidebar col-2 shadow-lg innerside'>
        <ul className='nav d-flex flex-column py-3' id="nav_accordion">
            <Link to="/admin/" style={{textDecoration:'none'}} >
                <li href="#" className="item" role="button" onClick={getID} name="childs" style={{backgroundColor:"#1e40af"}}>
                    <i className="iconcol fa-solid fa-table-columns"></i>
                    <span>Dashboard</span>
                </li>
            </Link>
            <li role="button">
                <a className="nav-link item d-flex justify-content-between align-items-center pointer-event" > 
                    <div>
                        <i className="iconcol fa-solid fa-building-columns"></i>
                        <span >University</span>
                    </div>
                    <i className="iconcol fa-solid fa-angle-down"></i> 
                </a>
                <ul className="submenu collapse">
                    <Link to="/admin/adduni" style={{textDecoration:'none'}}>
                        <li className="subitem" role="button" onClick={getID} name="childs">
                            <span>Add University</span>
                        </li>
                    </Link>
                    <Link to="/admin/getuni" style={{textDecoration:'none'}}>
                        <li className="subitem" role="button" onClick={getID} name="childs">
                            <span>Get University</span>
                        </li>
                    </Link>
                    <Link to="/admin/updateuni" style={{textDecoration:'none'}}>
                        <li className="subitem" role="button" onClick={getID} name="childs">
                            <span>Update University</span>
                        </li>
                    </Link>
                    <Link to="/admin/deluni" style={{textDecoration:'none'}}>
                        <li className="subitem" role="button" onClick={getID} name="childs">
                            <span>Delete University</span>
                        </li>
                    </Link>
                </ul>
            </li>
            <li role="button">
                <a className="nav-link item d-flex justify-content-between align-items-center pointer-event" > 
                    <div>
                    <i className="iconcol fa-solid fa-user"></i>
                        <span role="button">Users</span>
                    </div>
                    <i className="iconcol fa-solid fa-angle-down"></i> 
                </a>
                <ul className="submenu collapse">
                    <Link to="/admin/users" style={{textDecoration:'none'}}>
                        <li name="local" className="subitem" role="button" onClick={getID} name="childs">
                            <span> local </span>
                        </li>
                    </Link>
                    <Link to="/admin/admins" style={{textDecoration:'none'}}>
                        <li name="admin" className="subitem" role="button" onClick={getID} name="childs"> 
                            <span>Admin</span>
                        </li>
                    </Link>
                </ul>
            </li>
            <Link to="/admin/contact" style={{textDecoration:'none'}}>
                <li href="#" className="item" role="button" onClick={getID} name="childs">
                    <i className="iconcol fa-solid fa-file-contract"></i>
                    <span>Contact</span>
                </li>
            </Link>
            <Link to="/admin/devtools" style={{textDecoration:'none'}}>
                <li href="#" className="item" role="button" onClick={getID} name="childs">
                    <i className="iconcol fa-solid fa-code"></i>
                    <span>Developer mode</span>
                </li>
            </Link>
            <li href="#" className="item custom" role="button" onClick={getID} name="childs">
                <Link to="/admin/custom" style={{textDecoration:'none'}}>  
                    <i className="iconcol fa-solid fa-gear"></i>
                    <span>Customize</span>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Sidebar