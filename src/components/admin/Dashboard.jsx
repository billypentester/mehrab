import React from 'react'

import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


function Dashboard({ chartData }) {


  return (
        <div>
            <div className="d-flex justify-content-center">
                <div className='d-flex justify-content-between align-items-center col-3 text-white cardbg rounded-2 px-4 py-2 mx-3'>
                    <div className='d-flex flex-column'>
                        <span className='textcol'>visitors</span>
                        <span style={{fontSize:'30px',fontWeight:600}}>34,000</span>
                    </div>
                    <i class="fa-solid fa-eye  textcol" style={{fontSize:'25px'}}></i>
                </div>
                <div className='d-flex justify-content-between align-items-center col-3 text-white cardbg rounded-2 px-4 py-2 mx-3'>
                    <div className='d-flex flex-column'>
                        <span className='textcol'>Users</span>
                        <span style={{fontSize:'30px',fontWeight:600}}>5,000</span>
                    </div>
                    <i class="fa-solid fa-user textcol" style={{fontSize:'25px'}}></i>
                </div>
                <div className='d-flex justify-content-between align-items-center col-3 text-white cardbg rounded-2 px-4 py-2 mx-3'>
                    <div className='d-flex flex-column'>
                        <span className='textcol'>Universities</span>
                        <span style={{fontSize:'30px',fontWeight:600}}>240</span>
                    </div>
                    <i class="fa fa-university textcol" style={{fontSize:'25px'}} aria-hidden="true"></i>
                </div>
            </div>
            <div className="container p-4 my-4 rounded-3" style={{backgroundColor:'#12263f'}}>
                <span style={{fontSize:'25px'}}>API usage</span>
                <hr/>
                <div className='d-flex justify-content-around'>
                    <div className='col-8'>
                        <Line data={chartData} />
                    </div>
                </div>
            </div>
            <div className="container p-4 my-4 rounded-3" style={{backgroundColor:'#12263f'}}>
                <span style={{fontSize:'25px'}}>Login status</span>
                <hr/>
                <div className='d-flex justify-content-around'>
                    <div className='col-8'>
                        <Bar data={chartData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard