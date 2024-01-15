import React from 'react'
import { Link } from 'react-router-dom'
// import navBarLogo from "../../assets/Images/headerImageCroped-removebg-preview.png"

function Navbar() {
    return (
        <>
            <section id='navSec' className='sticky-top'>
                <div className='containerAlignSpace'>
                    {/* <nav>
                        <div>
                            <Link to='#home'><img src={navBarLogo} width={80} height={50} alt="" /></Link>
                        </div>
                        <div></div>
                    </nav> */}

                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" href="#">BharatTradeIns</Link>
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
                                    <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                                    <Link className="nav-link" href="#">Products</Link>
                                    <Link className="nav-link" href="#">About</Link>
                                    <Link className="nav-link" href="#">Contact Us</Link>
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