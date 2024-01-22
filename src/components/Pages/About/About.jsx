import React from 'react'
import warehouseImg from "../../../assets/Images/warehouseImg.jpg"
import containerImgForStrategy from "../../../assets/Images/containerForStrategy.jpg"
import mission from "../../../assets/Images/container.jpg"
import "./about.css"

function About() {
    return (
        <>
            {/* <section id='aboutUs' className='border'>
                <div className='containerAlignSpace'>
                    <div className='aboutMainSpace text-center py-3'>
                        <div className='w-75 mx-auto'>
                            <h1 className='mb-3'>Connect your business with the world</h1>
                            <p>As a leader in the design and construction of advanced technology facilities, our architectural solutions are a result of a collaborative process that empowers our multidisciplinary teams to share knowledge, leverage new technology and create innovative design solutions.</p>
                        </div>
                        <div className='row row-cols-1 row-cols-md-3 p-0 m-0'>
                            <div className="col">
                                <div>
                                    <h5>About Us</h5>
                                    <p> Mauris pharetra et ultrices neque ornare aenean euismod. Habitant morbi tristique senectus et netus et malesuada fames. Ut faucibus pulvinar elementum integer enim neque volutpat. </p>
                                </div>
                            </div>
                            <div className="col p-0">
                                <div>
                                    <img src={containerImgForStrategy} className='img-fluid' alt="" />
                                </div>
                            </div>
                            <div className="col">
                                <h5>Our Strategy</h5>
                                <p> Mauris pharetra et ultrices neque ornare aenean euismod. Habitant morbi tristique senectus et netus et malesuada fames. Ut faucibus pulvinar elementum integer enim neque volutpat. </p>
                            </div>
                            <div className="col p-0">
                                <div>
                                    <img src={mission} className='img-fluid' alt="" />
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <h5>Our Mission</h5>
                                    <p> Mauris pharetra et ultrices neque ornare aenean euismod. Habitant morbi tristique senectus et netus et malesuada fames. Ut faucibus pulvinar elementum integer enim neque volutpat. </p>
                                </div>
                            </div>
                            <div className="col p-0">
                                <div style={{ width: '100%', height: 'auto' }}>
                                    <img src={warehouseImg} className='img-fluid' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='booking_Part'>
                            <div className='row p-0 m-0'>
                                <div className='col-md-9 border bg-white text-dark' style={{ textAlign: 'left' }}>
                                    <h3>Get Personalised Business Advice</h3>
                                    <p style={{ fontSize: '13px' }}>Book a free, 15-minute consultation to discover new opportunities, shipping solutions and more.</p>
                                </div>
                                <div className='col-md-3 border bg-white text-dark d-flex justify-content-center align-items-center'>
                                    <button>Book now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section id='aboutUsSection' className='about-us-section border'>
                <div className='containerAlignSpace'>
                    <div className='aboutMainSpace'>
                        <div className='about-content w-75 mx-auto'>
                            <h1 className='about-heading mb-4'>Connect your business with the world</h1>
                            <p>As a leader in the design and construction of advanced technology facilities, our architectural solutions are a result of a collaborative process that empowers our multidisciplinary teams to share knowledge, leverage new technology and create innovative design solutions.</p>
                        </div>
                        <div className='row row-cols-1 row-cols-md-3 p-0 m-0' id='aboutUsFeatures'>
                            <div className="col feature-column">
                                <div>
                                    <h5>About Us</h5>
                                    <p>Mauris pharetra et ultrices neque ornare aenean euismod. Habitant morbi tristique senectus et netus et malesuada fames. Ut faucibus pulvinar elementum integer enim neque volutpat.</p>
                                </div>
                            </div>
                            <div className="col p-0">
                                <div>
                                    <img src={containerImgForStrategy} className='img-fluid' alt="Our Strategy" />
                                </div>
                            </div>
                            <div className="col feature-column">
                                <h5>Our Strategy</h5>
                                <p>Mauris pharetra et ultrices neque ornare aenean euismod. Habitant morbi tristique senectus et netus et malesuada fames. Ut faucibus pulvinar elementum integer enim neque volutpat.</p>
                            </div>
                            <div className="col p-0">
                                <div>
                                    <img src={mission} className='img-fluid' alt="Our Mission" />
                                </div>
                            </div>
                            <div className="col feature-column">
                                <div>
                                    <h5>Our Mission</h5>
                                    <p>Mauris pharetra et ultrices neque ornare aenean euismod. Habitant morbi tristique senectus et netus et malesuada fames. Ut faucibus pulvinar elementum integer enim neque volutpat.</p>
                                </div>
                            </div>
                            <div className="col p-0">
                                <div style={{ width: '100%', height: 'auto' }}>
                                    <img src={warehouseImg} className='img-fluid' alt="Warehouse" />
                                </div>
                            </div>
                        </div>
                        <div className='booking-Part' id='bookingSection'>
                            <div className='row p-0 m-0'>
                                <div className='col-md-9 bg-white'>
                                    <h3>Get Personalised Business Advice</h3>
                                    <p style={{ fontSize: '13px' }}>Book a free, 15-minute consultation to discover new opportunities, shipping solutions and more.</p>
                                </div>
                                <div className='col-md-3 bg-white d-flex justify-content-center align-items-center'>
                                    <button className='book-now-btn'>Book now</button>
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