import React from 'react'
import { HashLink as Link } from "react-router-hash-link"
import "./home.css"

function Home() {
  return (
    <>
      <section id='homeSection' className='home-section'>
        <div className="content-container position-absolute">
          <h2 className='main-heading'>"Elevating Experiences Where Customers Reign,<br /> People Lead, and Innovation Thrives"</h2>
          <p className='mt-3'>"Unlock global opportunities with our export expertise. Seamless solutions for success in international markets."</p>
          <Link to='#contactSection'><button className='Btn mx-3'>Contact Us</button></Link>
          <Link to='#WelcomeText'><button className='contact-btn Btn mx-3'>Get Started</button></Link>
        </div>
      </section>
    </>
  )
}

export default Home