import React from 'react'
import '../Contact/Contact.css'
const Contact = () => {
  return (
    <>
    
    <div>
        <section className="contact_us">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="contact_inner">
                  <div className="row">
                    <div className="col-md-10">
                      <div className="contact_form_inner">
                        <div className="contact_field">
                          <h3>Contatc Us</h3>
                          <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                          <input type="text" className="form-control form-group" placeholder="Name" />
                          <input type="text" className="form-control form-group" placeholder="Email" />
                          <textarea className="form-control form-group" placeholder="Message" defaultValue={""} />
                          <button className="contact_form_submit">Send</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="right_conatct_social_icon d-flex align-items-end">
                        <div className="socil_item_inner d-flex">
                          <li><a href="#"><i className="fab fa-facebook-square" /></a></li>
                          <li><a href="#"><i className="fab fa-instagram" /></a></li>
                          <li><a href="#"><i className="fab fa-twitter" /></a></li>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contact_info_sec">
                    <h4>Contact Info</h4>
                    <div className="d-flex info_single align-items-center">
                      <i className="fas fa-headset" />
                      <span>+91 8009 054294</span>
                    </div>
                    <div className="d-flex info_single align-items-center">
                      <i className="fas fa-envelope-open-text" />
                      <span>info@flightmantra.com</span>
                    </div>
                    <div className="d-flex info_single align-items-center">
                      <i className="fas fa-map-marked-alt" />
                      <span>1000+ Travel partners and 65+ Service city across India, USA, Canada &amp; UAE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
      
    </>
  )
}
export default Contact;