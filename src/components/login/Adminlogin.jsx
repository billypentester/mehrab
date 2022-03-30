import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Form } from 'react-bootstrap';

import { BrowserRouter, Link } from 'react-router-dom';

function Login() {
  return (
    <div className='container d-flex justify-content-center' >

        <Form className='form col-4 rounded-3 p-4 shadow-lg' style={{backgroundColor:'#fffff'}} autoComplete="off">
            <h1 className='text-center py-4 text-dark'>Admin Panel</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='text-dark'>Username</Form.Label>
                <Form.Control type="email" placeholder="Enter email" autoComplete="off" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='text-dark'>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" autoComplete="off" />
            </Form.Group>

            <Form.Group className="m-4 d-flex justify-content-end" controlId="formBasicCheckbox">
                <a href="#" className='hoverlink link-dark' >Forget Password?</a>
            </Form.Group>

            <div className='d-flex py-3'>
               <Link to="/admin">
                    <button type="submit" className='button'>
                        Submit
                    </button>
               </Link>
            </div>
            
        </Form>

    </div>    
  )
}

export default Login