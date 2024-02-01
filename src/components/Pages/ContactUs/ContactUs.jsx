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
                            <h2>Contact Us</h2>
                            <hr className="contact-divider" />
                            <p>"Join us in celebrating and sharing the bounty of India's fertile lands while <br /> supporting sustainable farming practices and local communities."</p>
                        </div>
                        <div className='contact-details'>
                            <div className="row" id="contactDetailsRow">
                                <div className="col-md-4">
                                    <div className="contact-icon" style={{ padding: '10px 15px' }}>
                                        <img src={LOCATION_ICON} alt="" />
                                    </div>
                                    <h5>Address:</h5>
                                    <p>Amroli, Surat,<br /> Gujarat, India - 394107</p>
                                </div>
                                <div className="col-md-4">
                                    <div className="contact-icon">
                                        <img src={MAIL_ICON} alt="" />
                                    </div>
                                    <h5>Email:</h5>
                                    <p><Link to="mailto:bharattradeinternational@gmail.com?subject=Demo Mail!">bharattradeinternational@gmail.com</Link><br />
                                        <Link to="mailto:btinternational22@gmail.com?subject=testing Mail!">btinternational22@gmail.com</Link></p>
                                </div>
                                <div className="col-md-4">
                                    <div className="contact-icon">
                                        <img src={CALL_ICON} alt="" />
                                    </div>
                                    <h5>Call us:</h5>
                                    <p className='mb-0'>+91 70419 14309</p>
                                    <p className='mt-0'>+91 70417 76309</p>
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