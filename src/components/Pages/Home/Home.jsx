import React from 'react'
// import homeBg from "../../../assets/Images/portHome.jpg"
import "./home.css"

function Home() {
  return (
    <>
      {/* <section id='homeSec' className='position-relative'>
        <img src={homeBg} className='img-fluid' alt="" />
        <div className="position-absolute border">
          <h4 className='mb-3'>Our Company</h4>
          <h1>Customer First, People Led, Innovation Driven</h1>
          <button className='Btn'>Contact Us</button>
        </div>
      </section> */}

      <section id='homeSection' className='home-section'>
        {/* <img src={homeBg} className='img-fluid' alt="Background" /> */}
        <div className="content-container position-absolute">
          {/* <h4 className='company-tagline mb-3'>Our Company</h4> */}
          {/* <h1 className='main-heading'>Customer First, People Led, Innovation Driven</h1> */}
          <h1 className='main-heading'>"Elevating Experiences Where Customers Reign, People Lead, and Innovation Thrives"</h1>
          <p className='mt-3'>See how your users experience your website in realtime or view<br />
            trends to see any changes in performance over time.</p>
          <button className='Btn mx-3'>Contact Us</button>
          <button className='contact-btn Btn mx-3'>Get Started</button>
        </div>
      </section>

    </>
  )
}

export default Home