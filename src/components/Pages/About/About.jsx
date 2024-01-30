import React from 'react'
import warehouseImg from "../../../assets/Images/warehouseImg.jpg"
import containerImgForStrategy from "../../../assets/Images/containerForStrategy.jpg"
import mission from "../../../assets/Images/container.jpg"
import "./about.css"

function About({handleWhatsAppClick}) {
    return (
        <>
            <section id='aboutUsSection' className='about-us-section'>
                <div className='containerAlignSpace'>
                    <div className='aboutMainSpace'>
                        <div className='about-content w-75 mx-auto'>
                            <h1 className='about-heading mb-4'>Connect your business with the world</h1>
                            <p>' As a leader in the design and construction of advanced technology facilities, our architectural solutions are a result of a collaborative process that empowers our multidisciplinary teams to share knowledge, leverage new technology and create innovative design solutions. '</p>
                        </div>
                        <div className='mt-5 row row-cols-1 row-cols-md-3 p-0 m-0'
                            id='aboutUsFeatures'>
                            <div className="col feature-column">
                                <div>
                                    <h5>About Us</h5>
                                    <p>"We specializes in sourcing premium agricultural products from the diverse landscapes of India. Our commitment to sustainability and fair trade practices ensures the delivery of top-quality crops, spices, and organic produce."</p>
                                </div>

                            </div>
                            <div className="col p-0">
                                <img src={containerImgForStrategy} alt="Our Strategy" />
                            </div>
                            <div className="col feature-column">
                                <div>
                                    <h5>Our Strategy</h5>
                                    <p>"Crafting Success: Our strategic approach blends innovation and precision, navigating challenges to ensure sustained growth. Partner with us for strategic excellence in a dynamic global landscape."</p>
                                </div>
                            </div>
                            <div className="col p-0">
                                <img src={mission} alt="Our Mission" />
                            </div>
                            <div className="col feature-column">
                                <div>
                                    <h5>Our Mission</h5>
                                    <p>"Our mission is to provide a superior quality, cost effective end to end export and import service, through strong customer focus, continuous improvement, reliability and trust – consistently exceeding our customers’ expectations."</p>
                                </div>
                            </div>
                            <div className="col p-0">
                                <img src={warehouseImg} alt="Warehouse" />
                            </div>
                        </div>
                        <div className='booking-Part' id='bookingSection'>
                            <div className='row p-0 m-0'>
                                <div className='col-md-9 bg-white'>
                                    <h3>Get Personalized Business Advice</h3>
                                    <p style={{ fontSize: '13px' }}>Book a free, 15-minute consultation to discover new opportunities, shipping solutions and more.</p>
                                </div>
                                <div className='col-md-3 bg-white d-flex justify-content-center align-items-center'>
                                    <button className='book-now-btn' onClick={handleWhatsAppClick}>Book now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About