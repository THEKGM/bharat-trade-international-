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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maiores in vel maxime consectetur recusandae asperiores deserunt consequuntur, totam neque!</p>
                        </div>
                        <div className='contact-details'>
                            <div className="row" id="contactDetailsRow">
                                <div className="col-md-4">
                                    <div className="contact-icon" style={{ padding: '10px 15px' }}>
                                        <img src={LOCATION_ICON} alt="" />
                                    </div>
                                    <h5>Address:</h5>
                                    <p>121 Rock Street, 21 Avenue,<br />
                                        New York, NY 92103-9000</p>
                                </div>
                                <div className="col-md-4">
                                    <div className="contact-icon">
                                        <img src={MAIL_ICON} alt="" />
                                    </div>
                                    <h5>Email:</h5>
                                    <p><Link to="mailto:hello@company.com">hello@company.com</Link><br />
                                        <Link to="mailto:support@company.com">support@company.com</Link></p>
                                </div>
                                <div className="col-md-4">
                                    <div className="contact-icon">
                                        <img src={CALL_ICON} alt="" />
                                    </div>
                                    <h5>Call us:</h5>
                                    <p>121 Rock Street, 21 Avenue,<br />
                                        New York, NY 92103-9000</p>
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