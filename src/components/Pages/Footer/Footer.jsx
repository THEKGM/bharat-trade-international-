import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import navBarLogo from "../../../assets/Images/footerImage.png";
import "./footer.css";
import ContactForm from "../Components/ContactForm";

function Footer({ handleWhatsAppClick }) {
  return (
    <>
      <section id="footerSection">
        <div className="containerAlignSpace">
          <footer className="footer-container">
            <div className="row" id="footerContent">
              {/* <div className="social-links-container col-md-5 col-lg-4 mb-5 mb-md-0"> */}
              <div className="social-links-container col-md-5 col-lg-12 mb-5 mb-md-0">
                <div className="company-info my-3">
                  <img
                    src={navBarLogo}
                    width={150}
                    height={150}
                    alt="companyLogo"
                    data-aos="zoom-in"
                    data-aos-duration="1200"
                  />
                  <p data-aos="fade-up" data-aos-duration="1200">
                    "Stay Connected & updated on our latest innovations and
                    industry insights. Join our community for a future of
                    excellence. Follow, share, and be part of the conversation."
                  </p>
                </div>
                <div className="social-links">
                  <Link
                    to="https://www.facebook.com/share/3gjEqfj2ahAYFS25/?mibextid=qi2Omg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaFacebook />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/bharattrade-international-63a7282b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaLinkedin />
                  </Link>
                  <Link
                    to="https://www.instagram.com/bharattradeinternational?utm_source=qr&igsh=MTVqdHJ1MjBnOXRveQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    onClick={handleWhatsAppClick}
                  >
                    <FaWhatsapp />
                  </Link>
                </div>
              </div>
              {/* <div className="contact-form col-md-7 col-lg-7 p-0 ps-md-5">
                                <ContactForm />
                            </div> */}
            </div>
            <div className="copyright-section mt-3" id="copyrightSection">
              <p className="copyright mb-0">
                &#169; {new Date().getFullYear()} Bharat Trade International.
                All Rights Reserved.
              </p>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}

export default Footer;
