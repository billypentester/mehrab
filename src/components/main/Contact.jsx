import {React, useState} from 'react'

function Contact() {

  const [data, getdata] = useState({ firstname:'', lastname:'', phone:'', email:'', msg:'' })

    let name, value;

  const handler = (e) => {
    name = e.target.name;
    value = e.target.value;

    getdata({ ...data, [name]:value })
  }

  console.log(data)



  return (
    <div>

        <section id="contact" class="contact-section my-5 d-flex flex-column justify-content-center rounded-3">

            <span className="display-4 text-center py-5 text-dark d-block">Get in touch with us</span>

            <div class="card col-8 p-0 mx-auto my-5">
                <div class="d-flex">
                    <div class="col-7">
                        <div class="card-body">
                            <h3 class="my-4 text-dark"><i class="fas fa-envelope pr-2 text-dark"></i>Have some Questions?</h3>
                            <div class="d-flex">

                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                    <input type="text"  id="form-contact-name" name="firstname" class="form-control" autoComplete='off' onChange={handler} value={data.firstname}/>
                                    <label for="form-contact-name" class="">First Name</label>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                    <input type="text" id="form-contact-email" name="lastname" class="form-control" autoComplete='off' onChange={handler} value={data.lastname}/>
                                    <label for="form-contact-email" class="">Last Name</label>
                                    </div>
                                </div>

                            </div>

                            <div class="d-flex">

                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                    <input type="email" id="form-contact-phone" name="email" class="form-control" autoComplete='off' onChange={handler} value={data.email}/>
                                    <label for="form-contact-phone" class="">Email</label>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                    <input type="number" id="form-contact-company" name="phone" class="form-control" autoComplete='off' onChange={handler} value={data.phone} />
                                    <label for="form-contact-company" class="">Phone no.</label>
                                    </div>
                                </div>

                            </div>

                            <div class="d-flex">

                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                    <textarea id="form-contact-message" name="msg" class="form-control md-textarea" autoComplete='off' onChange={handler} value={data.msg} rows="3"></textarea>
                                    <label for="form-contact-message">Your message</label>
                                    <div class="my-3">
                                        <a class="btn-floating btn-lg blue" role="button">
                                        <i class="far fa-paper-plane"></i>
                                        </a>
                                    </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div class="col-5 p-0 ">
                        <div class="card-body bg-dark text-center h-100 white-text rounded-3 p-0">

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.8459764989348!2d74.21276591498892!3d31.252686881459024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391853feb2ea5823%3A0x7e6c8780a1fe7b13!2sbillypentester!5e0!3m2!1sen!2s!4v1646747082838!5m2!1sen!2s"  style={{border:"0",width:'100%',height:'100%'}} allowfullscreen="" loading="lazy"></iframe>
                        
                        </div>
                    </div>

                </div>
            </div>
        </section>

    </div>
  )
}

export default Contact