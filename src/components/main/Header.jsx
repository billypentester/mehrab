import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>

        <div className="card card-image border-0" style={{height:'100vh',backgroundImage: "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",backgroundRepeat:'no-repeat',backgroundPosition:'center center',width:'100%',backgroundSize:'cover' }}>
            <div className="text-white text-center rgba-black-strong py-5 px-4 d-flex align-items-center justify-content-center" style={{height:'100vh'}}>
            <div className="py-5">
                <h2 className="card-title display-4">Find the best University for yourself</h2>
                <p className="mb-4 pb-2 px-md-5 mx-md-5 fw-bold admin subtext" style={{fontSize:'25px'}}>We will help you the find the best university according to your need.</p>
                <Link className="btn blue-gradient border-0 py-3 py-2" to="/finder">
                  <i className="fas fa-search left"></i> Find University
                </Link>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Header