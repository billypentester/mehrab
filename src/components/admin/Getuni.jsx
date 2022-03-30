import React from 'react'

function Getuni() {
  return (
    <div className='innerside'>
      <div className='d-flex justify-content-center p-3 '>
        <div className='col-4'>
          <h1 className="text-center display-5 my-5">Select University</h1>
          <div className='row'>
            <div className="col-10">
              <select>
                <option selected>Choose...</option>
                <option value="comsats">COMSATS</option>
                <option value="nust">NUST</option>
                <option value="fast">FAST</option>
                <option value="itu">ITU</option>
                <option value="pucit">PUCIT</option>
              </select>
            </div>
            <div className='col-2 m-0 p-0 d-flex align-items-center'>
              <button type="submit" className='bg-transparent mx-1 border-0'><i class="fa fa-search"></i></button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Getuni