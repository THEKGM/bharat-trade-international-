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
          <p className='mt-3'>See how your users experience your website in realtime or view<br />
            trends to see any changes in performance over time.</p>
          <Link to='#contactSection'><button className='Btn mx-3'>Contact Us</button></Link>
          <Link to='#connectWorldSpace'><button className='contact-btn Btn mx-3'>Get Started</button></Link>
        </div>
      </section>
    </>
  )
}

export default Home