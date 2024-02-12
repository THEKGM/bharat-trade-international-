import React from 'react'
import { HashLink as Link } from "react-router-hash-link"
import { motion, useScroll } from "framer-motion"
import "./navbar.css"

function Navbar() {
    const { scrollYProgress } = useScroll();
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
                                    {/* <Link className="nav-link" to="/admin">I AM ADMIN</Link> */}
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <motion.div style={{ scaleX: scrollYProgress }} className='progressBar' />
            </section>
        </>
    )
}

export default Navbar