import React from 'react'

function Userreg() {
  return (
    <div class="bg-dark smargin">

      <section class=" bg-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        <div class="d-flex align-items-center">
          <div class="container my-5 py-4">
            <div class="row d-flex justify-content-center">
              <div class="col-6 p-0">
                <div class="card rounded-start" style={{backgroundColor:'transparent',backdropFilter:'blur(30px)'}}>
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5 text-dark">Create an account</h2>

                    <form>

                      <div class="d-flex">
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                              <input type="text" id="form-contact-fn" class="form-control"/>
                              <label for="form-contact-fn" class="">First Name</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                              <input type="text" id="form-contact-ln" class="form-control"/>
                              <label for="form-contact-ln" class="">Last Name</label>
                            </div>
                        </div>
                      </div>

                      <div class="d-flex">
                        <div class="col-md-6">
                          <div class="md-form mb-0">
                            <input type="text" id="form-contact-email" class="form-control"/>
                            <label for="form-contact-email" class="">Email</label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="md-form mb-0">
                            <input type="text" id="form-contact-phone" class="form-control"/>
                            <label for="form-contact-phone" class="">Contact No.</label>
                          </div>
                        </div>
                      </div>

                      <div class="d-flex">
                        <div class="col-12">
                          <select class="mdb-select md-form text-dark" searchable="Search here..">
                            <option value="" disabled selected >Choose your City</option>
                            <option value="1">USA</option>
                            <option value="2">Germany</option>
                            <option value="3">France</option>
                            <option value="3">Poland</option>
                            <option value="3">Japan</option>
                          </select>
                        </div>
                      </div>

                      <div class="d-flex">
                        <div class="col-md-6">
                          <div class="md-form mb-0">
                            <input type="text" id="form-contact-pass" class="form-control"/>
                            <label for="form-contact-pass" class="">Password</label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="md-form mb-0">
                            <input type="text" id="form-contact-confirmpass" class="form-control"/>
                            <label for="form-contact-confirmpass" class="">Confirm Password</label>
                          </div>
                        </div>
                      </div>

                      {/* <div class="form-check d-flex justify-content-center mb-5">
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label class="form-check-label" for="form2Example3g">
                          I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                        </label>
                      </div> */}

                      {/* <div >
                        <button type="button" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                      </div> */}

                      <div class="d-flex justify-content-center my-3">
                        <a className="btn blue-gradient border-0 py-3 py-2 col-8">Register</a>
                      </div>
                      

                      <p class="text-center text-dark mt-5 mb-0">Have already an account? 
                        <a href="#!" class="fw-bold text-body text-dark mx-2">
                          Login here
                        </a>
                      </p> 

                    </form>

                  </div>
                </div>
              </div>
              <div class="col-4 p-0 rounded-end p-2" style={{backgroundColor:'transparent',backdropFilter:'blur(10px)'}}>
              <h2 class="text-uppercase text-center my-5 text-dark">Quick Signup</h2>
                <div class="d-flex flex-column">
                <div class="my-1 w-full">
                        <a className="btn blue-gradient border-0 py-3 py-2 col-8">Register</a>
                      </div>
                      <div class=" my-1">
                        <a className="btn blue-gradient border-0 py-3 py-2 col-8">Register</a>
                      </div>
                      <div class=" my-1">
                        <a className="btn blue-gradient border-0 py-3 py-2 col-8">Register</a>
                      </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

    </div>

  )
}

export default Userreg