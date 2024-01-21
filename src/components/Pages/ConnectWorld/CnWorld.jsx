import React from 'react'
import ourStrategy from "../../../assets/Images/ourStrategy.jpg"
import InnovativeDriven from "../../../assets/Images/InnovativeDriven.jpg"
import leadership from "../../../assets/Images/leadership.jpg"
// import container from "../../assets/Images/container-429949_1920.jpg"
import container from "../../../assets/Images/container-operation-port-series.jpg"
import { Link } from 'react-router-dom'
import "./connectWorld.css"

function CnWorld() {
    return (
        <>
            {/* <section id='connectWorldSpace'>
                <div className="containerAlignSpace">
                    <div className='w-100 pt-3'>
                        <div className='text-center headPart'>
                            <h1>We Connect the World</h1>
                            <p className='text-break'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos at ut totam laudantium, accusantium labore!</p>
                        </div>
                        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-0 text-center' style={{ backgroundColor: '#ffad28' }}>
                            <div className='col'>
                                <div className="card h-100 p-3 border-0">
                                    <img src={leadership} className='card-img-top h-100' alt="" />
                                    <div className='card-body'>
                                        <h4 className='card-title'>Leadership</h4>
                                        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic debitis enim accusantium quasi sit ipsum architecto atque saepe illo, tempora amet cupiditate ea, quaerat expedita?</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className="card h-100 p-3 border-0">
                                    <img src={ourStrategy} className='card-img-top h-100' alt="" />
                                    <div className='card-body'>
                                        <h4 className='card-title'>Our Strategy</h4>
                                        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic debitis enim accusantium quasi sit ipsum architecto atque saepe illo, tempora amet cupiditate ea, quaerat expedita?</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className="card h-100 p-3 border-0">
                                    <img src={InnovativeDriven} className='card-img-top h-100' alt="" />
                                    <div className='card-body'>
                                        <h4 className='card-title'>Innovation Driven</h4>
                                        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic debitis enim accusantium quasi sit ipsum architecto atque saepe illo, tempora amet cupiditate ea, quaerat expedita?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-center' style={{ padding: '20px 0 35px' }}>
                            <button className='Btn mx-auto'><Link to="#home" className='text-decoration-none text-white'>Learn more</Link></button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='contactPeraSec'>
                <div className="containerAlignSpace">
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-lg-6 InfoPart" style={{ padding: '50px', backgroundColor: '#e5e5e5' }}>
                                <div className="card-body p-0">
                                    <h4 className="card-title">OUR COMPANY</h4>
                                    <h3 className="card-text mt-3">Leading the industry and connecting the world.</h3>
                                    <p className="card-text mt-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                                    <button className='Btn'>Contact Us</button>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img src={container} className="" style={{ width: '100%', height: '100%' }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section id='connectWorldSpace'>
                <div className="containerAlignSpace">
                    <div className='CnWSpace'>
                        <div className='headPart'>
                            <h1 className="main-heading">We Connect the World</h1>
                            <p className='text-break'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Eos at ut totam laudantium, accusantium labore!</p>
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
                            <button className='Btn mx-auto'><Link to="#home">Learn more</Link></button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contactParagraphSection">
                <div className="containerAlignSpace">
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-lg-6 InfoPart">
                                <div className="card-body">
                                    <h4 className="card-title">OUR COMPANY</h4>
                                    <h3 className="card-text">Leading the industry and connecting the world.</h3>
                                    <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                                    <button className='Btn' id="contactUsButton">Contact Us</button>
                                </div>
                            </div>
                            <div className="col-lg-6">
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