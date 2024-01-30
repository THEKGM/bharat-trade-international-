import React from 'react'
// import homeBg from "../../../assets/Images/portHome.jpg"
import { HashLink as Link } from "react-router-hash-link"
import "./home.css"

function Home() {
  return (
    <>
      <section id='homeSection' className='home-section'>
        {/* <img src={homeBg} className='img-fluid' alt="Background" /> */}
        <div className="content-container position-absolute">
          {/* <h4 className='company-tagline mb-3'>Our Company</h4> */}
          {/* <h1 className='main-heading'>Customer First, People Led, Innovation Driven</h1> */}
          <h1 className='main-heading'>"Elevating Experiences Where Customers Reign,<br /> People Lead, and Innovation Thrives"</h1>
          <p className='mt-3'>"Unlock global opportunities with our export expertise. Seamless solutions for <br /> success in international markets. Elevate your business worldwide."</p>
          <Link to='#contactSection'><button className='Btn mx-3'>Contact Us</button></Link>
          {/* <Link to='#connectWorldSpace'><button className='contact-btn Btn mx-3'>Get Started</button></Link> */}
        </div>
      </section>
    </>
  )
}

export default Home