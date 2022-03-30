import React from 'react'

import { Link } from 'react-router-dom';

function Head() {

    const getLocation = () => {
        console.log("h")
        if (navigator.geolocation) 
        {
          navigator.geolocation.getCurrentPosition((position)=>{
            showPosition(position);
            console.log(position)
          });
        } 
        else 
        { 
         console.log("this browser doesn't support geolocation.")
        }
    }
      
    const showPosition = (position) => {
        console.log(position.coords.latitude + "\n");
        console.log(position.coords.longitude + "\n");
    }
  return (
    <div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 ">
            <div className='container'>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item mx-2 px-3 py-1 rounded-2">
                            <a className="nav-link" href="/#contact">Search</a>
                        </li>
                        <li className="nav-item mx-2 px-3 py-1 rounded-2">
                            <button type="button" className="nav-link bg-transparent border-0" onClick={getLocation}>Locator</button>
                        </li>
                    </ul>
                    <a className="navbar-brand " href="#">Mehrab</a>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-2 px-3 py-1 rounded-2">
                            <button type="button" data-toggle="modal" data-target="#basicExampleModal" className="nav-link bg-transparent border-0">Consultant</button>
                        </li>
                        <li className="nav-item mx-2 px-3 py-1 rounded-2">
                            <button type="button" data-toggle="modal" data-target="#basicExampleModal" className="nav-link bg-transparent border-0">University Suggestor</button>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>


        <div class="modal fade" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" style={{position:'absolute',top:'20%',right:'40%'}} role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-dark" id="exampleModalLabel">Login Required</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" className='text-dark'>&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center">
                    <p className="text-dark text-center fw-bold">You need to login to get this feature.</p>
                    <span className="text-dark">If you don't have account, quick login thorugh <a>here</a></span><br/>
                    <span className="text-dark">go to login page from <a>here</a></span>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark border-0 w-100" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Head