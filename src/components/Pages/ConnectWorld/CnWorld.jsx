import React from 'react'
// import ourStrategy from "../../../assets/Images/ourStrategy.jpg"
// import InnovativeDriven from "../../../assets/Images/InnovativeDriven.jpg"
// import leadership from "../../../assets/Images/leadership.jpg"
// import container from "../../assets/Images/container-429949_1920.jpg"
import container from "../../../assets/Images/container-operation-port-series.jpg"
// import { Link } from 'react-router-dom'
import { HashLink as Link } from "react-router-hash-link"
import "./connectWorld.css"

function CnWorld() {
    return (
        <>
            {/* <section id='connectWorldSpace'>
                <div className="containerAlignSpace">
                    <div className='CnWSpace'>
                        <div className='headPart'>
                            <h1 className="main-heading">We Connect the World</h1>
                            <p className='text-break'>"Global Bridges, Connecting Businesses Worldwide for <br /> Endless Opportunities and Flourishing Partnerships."</p>
                        </div>
                        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4' id="featureCards">
                            <div className='col'>
                                <div className="card">
                                    <img src={leadership} className='card-img-top' alt="..." />
                                    <div className='card-body'>
                                        <h4 className='card-title'>Leadership</h4>
                                        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic debitis enim accusantium quasi sit ipsum architecto atque saepe illo, tempora amet cupiditate ea, quaerat expedita?</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className="card">
                                    <img src={ourStrategy} className='card-img-top' alt="..." />
                                    <div className='card-body'>
                                        <h4 className='card-title'>Our Strategy</h4>
                                        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic debitis enim accusantium quasi sit ipsum architecto atque saepe illo, tempora amet cupiditate ea, quaerat expedita?</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className="card">
                                    <img src={InnovativeDriven} className='card-img-top' alt="..." />
                                    <div className='card-body'>
                                        <h4 className='card-title'>Innovation Driven</h4>
                                        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic debitis enim accusantium quasi sit ipsum architecto atque saepe illo, tempora amet cupiditate ea, quaerat expedita?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="learnMoreButtonSection">
                            <Link to="#contactParagraphSection"><button className='Btn mx-auto'>Learn more</button></Link>
                        </div>
                    </div>
                </div>
            </section> */}

            <section id="contactParagraphSection">
                <div className="containerAlignSpace">
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-lg-6 InfoPart" data-aos="fade-right" data-aos-duration="800">
                                <div className="card-body">
                                    <h4 className="card-title">OUR COMPANY</h4>
                                    <h3 className="card-text">Leading the industry and connecting the world.</h3>
                                    <p className="card-text">We specializes in sourcing premium agricultural products from the diverse landscapes of India. Our commitment to sustainability and fair trade practices ensures the delivery of top-quality crops, spices, and organic produce. Through strong partnerships with local farmers, we export the authentic flavors and richness of India's agriculture, maintaining stringent quality control to offer exceptional products to global markets.</p>
                                    <Link to='#contactSection'><button className='Btn' id="contactUsButton">Contact Us</button></Link>
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="fade-left" data-aos-duration="800">
                                <img src={container} width='100%' height='100%' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default CnWorld