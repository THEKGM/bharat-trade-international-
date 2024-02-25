import React from 'react'
import LOCATION_ICON from "../../../assets/svg/location.svg"
import MAIL_ICON from "../../../assets/svg/mail.svg"
import CALL_ICON from "../../../assets/svg/call.svg"
import { Link } from 'react-router-dom'
import "./contact-us.css"

function ContactUs() {
    return (
        <>
            <section id='contactSection' className='contact-section'>
                <div className='containerAlignSpace'>
                    <div className='contactSpace'>
                        <div className='contact-info'>
                            <h2 data-aos="flip-down" data-aos-duration="1200">Contact Us</h2>
                            <hr className="contact-divider" data-aos="zoom-in" data-aos-duration="1200" />
                            <p data-aos="flip-up" data-aos-duration="1200">"Join us in celebrating and sharing the bounty of India's fertile lands while <br /> supporting sustainable farming practices and local communities."</p>
                        </div>
                        <div className='contact-details'>
                            <div className="row" id="contactDetailsRow">
                                <div className="col-md-4">
                                    <div className="contact-icon" style={{ padding: '10px 15px' }} data-aos="zoom-out-up" data-aos-duration="1200">
                                        <img src={LOCATION_ICON} alt="" />
                                    </div>
                                    <h5 data-aos="fade-right" data-aos-duration="1200">Address:</h5>
                                    <p data-aos="flip-up" data-aos-duration="1200">Amroli, Surat,<br /> Gujarat, India - 394107</p>
                                </div>
                                <div className="col-md-4">
                                    <div className="contact-icon" data-aos="zoom-out-up" data-aos-duration="1200">
                                        <img src={MAIL_ICON} alt="" />
                                    </div>
                                    <h5 data-aos="zoom-in" data-aos-duration="1200">Email:</h5>
                                    <p data-aos="flip-up" data-aos-duration="1200"><Link to="mailto:bharattradeinternational@gmail.com?subject=New Inquiry Mail!">bharattradeinternational@gmail.com</Link><br />
                                        <Link to="mailto:btinternational22@gmail.com?subject=New Inquiry Mail!">btinternational22@gmail.com</Link></p>
                                </div>
                                <div className="col-md-4">
                                    <div className="contact-icon" data-aos="zoom-out-up" data-aos-duration="1200">
                                        <img src={CALL_ICON} alt="" />
                                    </div>
                                    <h5 data-aos="fade-left" data-aos-duration="1200">Call us:</h5>
                                    <p data-aos="flip-up"><Link to="tel:+91 70419 14309" data-aos="flip-up" data-aos-duration="1200">+91 70419 14309</Link><br />
                                        <Link to="tel:+91 70417 76309" data-aos="flip-up" data-aos-duration="1200">+91 70417 76309</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs