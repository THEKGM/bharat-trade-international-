import React from 'react'
import LOCATION_ICON from "../../../assets/svg/location.svg"
import MAIL_ICON from "../../../assets/svg/mail.svg"
import CALL_ICON from "../../../assets/svg/call.svg"
import { Link } from 'react-router-dom'
import "./contact-us.css"

function ContactUs() {
    return (
        <>
            {/* <section id='contactSec' className='d-flex align-items-center'>
                <div className='containerAlignSpace'>
                    <div className='contactSpace'>
                        <div className='w-75 mx-auto'>
                            <h2>Contact Us</h2>
                            <hr />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maiores in vel maxime consectetur recusandae asperiores deserunt consequuntur, totam neque!</p>
                        </div>
                        <div style={{ marginTop: '40px' }}>
                            <div className="row p-0 m-0">
                                <div className="col-md-4">
                                    <div style={{ height: '70px', width: '70px', background: '#f19a0e', borderRadius: '50%', padding: "10px 15px", margin: '25px auto' }}>
                                        <img src={LOCATION_ICON} alt="" />
                                    </div>
                                    <h5>Address:</h5>
                                    <p>121 Rock Street, 21 Avenue,<br />
                                        New York, NY 92103-9000</p>
                                </div>
                                <div className="col-md-4">
                                    <div style={{ height: '70px', width: '70px', background: '#f19a0e', borderRadius: '50%', padding: "15px", margin: '25px auto' }}>
                                        <img src={MAIL_ICON} alt="" />
                                    </div>
                                    <h5>Email:</h5>
                                    <p><Link to="hello@company.com">hello@company.com</Link><br />
                                        <Link to="support@company.com">support@company.com</Link></p>
                                </div>
                                <div className="col-md-4">
                                    <div style={{ height: '70px', width: '70px', background: '#f19a0e', borderRadius: '50%', padding: "15px", margin: '25px auto' }}><img src={CALL_ICON} alt="" /></div>
                                    <h5>Call us:</h5>
                                    <p>121 Rock Street, 21 Avenue,<br />
                                        New York, NY 92103-9000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

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