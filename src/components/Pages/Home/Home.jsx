import React from 'react'
// import homeBg from "../../../assets/Images/portHome.jpg"
import { HashLink as Link } from "react-router-hash-link"
// import SLIDER_IMG_ONE from "../../../assets/Images/Products/spices.jpg"
// import SLIDER_IMG_TWO from "../../../assets/Images/Products/fruit-221158_1920.jpg"
// import SLIDER_IMG_THREE from "../../../assets/Images/Products/mix-dried-fruitsTwo.jpg"
import "./home.css"

function Home() {
  return (
    <>
      <section id='homeSection' className='home-section'>
        {/* <img src={homeBg} className='img-fluid' alt="Background" /> */}
        <div className="content-container position-absolute">
          {/* <h4 className='company-tagline mb-3'>Our Company</h4>
          <h1 className='main-heading'>Customer First, People Led, Innovation Driven</h1> */}
          <h2 className='main-heading'>"Elevating Experiences Where Customers Reign,<br /> People Lead, and Innovation Thrives"</h2>
          <p className='mt-3'>"Unlock global opportunities with our export expertise. Seamless solutions for success in international markets."</p>
          <Link to='#contactSection'><button className='Btn mx-3'>Contact Us</button></Link>
          <Link to='#WelcomeText'><button className='contact-btn Btn mx-3'>Get Started</button></Link>
        </div>

        {/* <div id="carouselExampleAutoPlaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={SLIDER_IMG_ONE} className="d-block w-100 img-fluid" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={SLIDER_IMG_TWO} className="d-block w-100 img-fluid" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={SLIDER_IMG_THREE} className="d-block w-100 img-fluid" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoPlaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoPlaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div> */}


      </section>
    </>
  )
}

export default Home