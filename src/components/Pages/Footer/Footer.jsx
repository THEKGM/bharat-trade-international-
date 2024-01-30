import React from 'react'
import { Link } from 'react-router-dom'
// import INSTAGRAM_ICON from "../../assets/svg/instagram.svg"
// import FACEBOOK_ICON from "../../assets/svg/facebook.svg"
// import TWITTER_X_ICON from "../../assets/svg/twitterX.svg"
// import WHATSAPP_ICON from "../../assets/svg/whatsapp.svg"
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"
import navBarLogo from "../../../assets/Images/WhatsApp_Image_2024-01-28_at_14.54.41_534a55c3-removebg-preview.png"
import "./footer.css"
import ContactForm from '../Components/ContactForm'

function Footer({handleWhatsAppClick}) {
    return (
        <>
            <section id='footerSection'>
                <div className='containerAlignSpace'>
                    <footer className="footer-container">
                        <div className='row' id="footerContent">
                            <div className="social-links-container col-md-5 col-lg-4 mb-5 mb-md-0">
                                <div className='company-info my-3'>
                                    <img src={navBarLogo} width={150} height={150} alt="companyLogo" />
                                    <p>"Stay Connected & updated on our latest innovations and industry insights. Join our community for a future of excellence. Follow, share, and be part of the conversation."</p>
                                </div>
                                <div className='social-links'>
                                    <Link href="#" target="_blank" rel="noopener noreferrer" className="social-link"><FaFacebook /></Link>
                                    <Link href="#" target="_blank" rel="noopener noreferrer" className="social-link"><FaTwitter /></Link>
                                    <Link href="#" target="_blank" rel="noopener noreferrer" className="social-link"><FaInstagram /></Link>
                                    <Link href="#" target="_blank" rel="noopener noreferrer" className="social-link" onClick={handleWhatsAppClick}><FaWhatsapp /></Link>
                                </div>
                            </div>
                            <div className="contact-form col-md-7 col-lg-7 p-0 ps-md-5">
                                {/* <ContactForm companyName="Bharat Trade International." /> */}
                                <ContactForm />
                            </div>
                        </div>
                        <div className='copyright-section mt-3' id="copyrightSection">
                            <p className="copyright mb-0">&copy; 2024 Bharat Trade International. All Rights Reserved.</p>
                        </div>
                    </footer>
                </div>
            </section>

        </>
    )
}

export default Footer