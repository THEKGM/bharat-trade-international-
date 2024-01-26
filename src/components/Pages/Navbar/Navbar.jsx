import React from 'react'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from "react-router-hash-link"
// import navBarLogo from "../../assets/Images/headerImageCroped-removebg-preview.png"
import "./navbar.css"

function Navbar() {
    window.addEventListener("scroll", () => {
        let navSec = document.getElementById("navSec");
        if (window.scrollY > 400) {
            navSec.style.boxShadow = "3px 0px 10px 10px rgba(0,0,0,0.7)";
        } else {
            navSec.style.boxShadow = "none";
        }
    })
    return (
        <>
            <section id='navSec' className='sticky-top'>
                <div className='containerAlignSpace'>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="#homeSection">BharatTradeIns</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="offcanvas offcanvas-start"
                                data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Bharat Trade Ins.</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body justify-content-end">
                                    <Link className="nav-link active" aria-current="page" to="#homeSection">Home</Link>
                                    <Link className="nav-link" to="#productImagesSection">Products</Link>
                                    <Link className="nav-link" to="#aboutUsSection">About</Link>
                                    <Link className="nav-link" to="#contactSection">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default Navbar