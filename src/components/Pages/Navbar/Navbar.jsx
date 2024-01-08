import React from 'react'
import { Link } from 'react-router-dom'
import navBar_Logo from "../../../assets/Images/headerImageCroped-removebg-preview.png";
import dorpDownArrow from "../../../assets/svg/arrow-down.svg";
import "./navbar.css"

function Navbar() {
    return (
        <>
            <div className='NavbarSec'>
                <div className='NavBar_Space'>
                    <div className="containerDiv p-0">
                        <nav class="navbar navbar-expand-lg p-0">
                            <div class="container-fluid">
                                <Link class="navbar-brand" href="/">
                                    <img src={navBar_Logo} className='img-fluid' height={50} width={80} alt='' />
                                </Link>

                                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button> */}

                                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

                                <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                    <div class="offcanvas-header">
                                        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body align-self-lg-end">
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
                                            <li class="nav-item">
                                                <Link class="nav-link active" aria-current="page" href="#">Home</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link" href="#">About</Link>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <Link class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Categories <img src={dorpDownArrow} alt="" />
                                                </Link>
                                                <ul class="dropdown-menu">
                                                    <li><Link class="dropdown-item" href="#">Action</Link></li>
                                                    <li><Link class="dropdown-item" href="#">Another action</Link></li>
                                                    <li><hr class="dropdown-divider" /></li>
                                                    <li><Link class="dropdown-item" href="#">Something else here</Link></li>
                                                </ul>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className='containerDiv'>
                    <div className='homeImgOverlay'>
                        <h1 className='text-break'>Bharat Trade <br />International..!!</h1>
                        <p className='text-break'>
                        "Unlock global opportunities with [Your Company Name]! Your trusted partner for hassle-free exports. Join us on a journey of seamless trade and unparalleled support. Start exporting effortlessly with us today!"</p>
                        <button>Contact US</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar