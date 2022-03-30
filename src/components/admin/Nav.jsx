import React from 'react'

import './admin.css'

const hide = () =>{
  var sider = document.getElementById("sider");
  var navbar = document.getElementById("navbar");
  var content = document.getElementById("content");

  if(sider.classList.contains('d-none') == true)
  {
    sider.classList.add('col-2','trans');
    sider.classList.remove('d-none');
    navbar.classList.add('col-10')
    navbar.classList.remove('col-12')
    content.classList.add('col-10')
    content.classList.remove('col-12')
  }
  else{
    sider.classList.remove('col-2');
    sider.classList.add('d-none','trans');
    navbar.classList.remove('col-10')
    navbar.classList.add('col-12')
    content.classList.remove('col-10')
    content.classList.add('col-12')
  }

  

}

function Navtop() {
  return (
    <div id="navbar" className='col-10 bcol shadow-lg float-end p-3 d-flex align-items-center justify-content-between' style={{backgroundColor: '#12263f'}}>
      <div className='d-flex align-items-center'>
        <i class="fa-solid fa-cube mx-1 box" role="button" onClick={hide}></i>
        <h1 className='text-white mx-2 display-6 '> Welcome <span className='admin'>Admin</span> </h1>
      </div>
      <div>
        <img src="https://via.placeholder.com/150" alt='profile' className='rounded-circle' style={{width:'60px'}} />
      </div>
    </div>
  )
}

export default Navtop