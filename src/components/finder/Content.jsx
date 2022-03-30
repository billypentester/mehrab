import React from 'react'
import {Form} from 'react-bootstrap';

function Content() {
  return (
    <div className='p-4 d-flex'>
        <span className='col-2 text-dark align-self-center text-uppercase fw-bold' style={{fontSize:'20px'}}>Sort by</span>
        <div className='col-3 p-0'>
          <Form.Select aria-label="Default select example">
            <option value="1">Ranking</option>
            <option value="2">Location</option>
            <option value="3">Fee</option>
          </Form.Select>
        </div>
    </div>
  )
}

export default Content