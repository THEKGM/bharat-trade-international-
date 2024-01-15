import React from 'react'
import homeBg from "../../assets/Images/portHome.jpg"

function Home() {
  return (
    <>
      <section id='homeSec' className='position-relative'>
        <img src={homeBg} className='img-fluid' alt="" />
        {/* <div className='containerAlignSpace'> */}
        <div className='bgWall' />
        <div className="position-absolute">
          <h4 className='mb-3'>Our Company</h4>
          <h1>Customer First, People Led, Innovation Driven</h1>
          <button className='Btn'>Contact Us</button>
        </div>
        {/* </div> */}
      </section>
    </>
  )
}

export default Home