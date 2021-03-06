import React from 'react'

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 ">
            <div className='container'>
                <a className="navbar-brand" href="#">Mehrab</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-2 px-3 py-1 rounded-2 active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item mx-2 px-3 py-1 rounded-2">
                            <a className="nav-link" href="/#contact">Contact</a>
                        </li>
                        <li className="nav-item mx-2 px-3 py-1 rounded-2">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        <li className="nav-item mx-2 px-3 py-1 rounded-2">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>

    </div>
  )
}

export default Navbar