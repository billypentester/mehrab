import React from 'react'
import {Accordion} from 'react-bootstrap'

import './admin.css'

function AddUni() {
  return (
    <div style={{height:'100vh'}}>

        <form autoComplete="off">
            <Accordion defaultActiveKey="0" flush >
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="bg-dark">Basic Details</Accordion.Header>
                    <Accordion.Body style={{backgroundColor:'#12263f'}}>

                        <div className="row my-3">
                            <div className="form-group col-md-6">
                                <label className="labels my-1">Name*</label>
                                <input class="get" type="text" placeholder="Name" autocomplete="off" autoFocus />
                            </div>
                            <div className="form-group col-md-6">
                                <label className="labels my-1">Campus*</label>
                                <input class="get" type="text" placeholder="city" />
                            </div>
                        </div>

                        <div className="row my-3">
                            <div className="form-group col-md-8">
                                <label className="labels my-1">About</label>
                                <textarea rows="1" cols="50" type="text" placeholder="write something about university....."></textarea>
                            </div>
                            <div className="form-group col-md-4">
                                <label className="labels my-1">Status</label>
                                <input class="get" type="text" placeholder="Government / Private" />
                            </div>
                        </div>

                        <div className="row my-3">
                            <div className="form-group col-md-6">
                                <label className="labels my-1">Address*</label>
                                <input class="get" type="text" placeholder="Address" />
                            </div>
                            <div className="form-group col-md-6">
                                <label className="labels my-1">Website*</label>
                                <input class="get" type="text" placeholder="Website" />
                            </div>
                        </div>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Admission Details</Accordion.Header>
                    <Accordion.Body style={{backgroundColor:'#12263f'}}>
                        <div className="row my-3">
                            <div className="form-group col-md-3">
                                <label className="labels my-1">Admission start date</label>
                                <input class="get" type="date" placeholder="Email" autoFocus  />
                            </div>
                            <div className="form-group col-md-3">
                                <label className="labels my-1">Admission end date</label>
                                <input class="get" type="date" placeholder="Contact number" />
                            </div>
                            <div className="form-group col-md-3">
                                <label className="labels my-1">Apply website</label>
                                <input class="get" type="url" placeholder="Fax number" />
                            </div>
                            <div className="form-group col-md-3">
                                <label className="labels my-1">Batch</label>
                                <div className="input-group row">
                                    <div className="input-group col">
                                        <select  id="inputGroupSelect01">
                                        <option selected>Choose...</option>
                                        <option value="FALL">FALL</option>
                                        <option value="SPRING">SPRING</option>
                                        </select>
                                    </div>
                                    <div className="input-group col">
                                        <select id="inputGroupSelect01">
                                        <option selected>session...</option>
                                        <option value="2020-2021">2020-2021</option>
                                        <option value="2021-2022">2021-2022</option>
                                        <option value="2022-2023">2022-2023</option>
                                        <option value="2023-2024">2023-2024</option>
                                        <option value="2024-2025">2024-2025</option>
                                        </select>
                                    </div>
                                </div> 
                            </div>   
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Contact Details</Accordion.Header>
                    <Accordion.Body style={{backgroundColor:'#12263f'}}>
                    <div className="row my-3">
                        <div className="form-group col-md-4">
                            <label className="labels my-1">Email</label>
                            <input class="get" type="email" placeholder="Email" autoFocus  />
                        </div>
                        <div className="form-group col-md-4">
                            <label className="labels my-1">Phone No.</label>
                            <input class="get" type="number" placeholder="Contact number" />
                        </div>
                        <div className="form-group col-md-4">
                            <label className="labels my-1">Fax No.</label>
                            <input class="get" type="text" placeholder="Fax number" />
                        </div>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            {/* <div className="row my-5">
                <fieldset className="form-group col-md-12">
                    <legend className="my-1">Undergraduate Programs</legend>
                    <div className="row">
                    <div className="col-md-3">
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Accounting & Finance</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Bioinformatics</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Biotechnology</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Biosciences</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Business Administration</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Chemical Engineering</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Civil Engineering</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Computer Engineering</label>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Computer Science</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Development Studies</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Economics</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Electronics</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Electrical Engineering</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Electrical (Electronics) Engineering</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Electrical (Power) Engineering</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Environmental Sciences</label>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Food Sciences and Nutrition</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Geology</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Geophysics</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Mathematics</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Mechanical Engineering</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Physics</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Psychology</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Software Engineering</label>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Statistics</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Media and Communication Studies</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. English</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Data Sciences</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Artificial Intelligence</label>
                        </div>
                        <div className="form-check">
                            <input class="get" className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="labels form-check-label" for="gridCheck1">BS. Cyber Security</label>
                        </div>
                    </div>
                    </div>
                </fieldset>     
            </div> */}

            


        </form>
    </div>
  )
}

export default AddUni