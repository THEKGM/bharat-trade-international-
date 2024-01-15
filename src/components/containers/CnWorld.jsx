import React from 'react'
import ourStrategy from "../../assets/Images/ourStrategy.jpg"
import InnovativeDriven from "../../assets/Images/InnovativeDriven.jpg"
import leadership from "../../assets/Images/leadership.jpg"
import container from "../../assets/Images/container-429949_1920.jpg"
import { Link } from 'react-router-dom'

function CnWorld() {
    return (
        <>
            <section id='connectWorldSpace'>
                <div className="containerAlignSpace">
                    <div className='w-100 pt-5'>
                        <div className='text-center headPart'>
                            <h1>We Connect the World</h1>
                            <p className='text-break'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos at ut totam laudantium, accusantium labore!</p>
                        </div>
                        {/* <div> */}
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
                        {/* <div className='cc border-dark d-flex justify-content-around'>
                                <div className='border'>
                                    <div>
                                        <img src={leadership} alt="" />
                                        <div>
                                            <h1>Leadership</h1>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, fugit amet. Ullam iusto, voluptatum praesentium sed natus amet quae atque, animi, consequuntur totam ipsam ut.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='border'>
                                    <div>
                                        <img src={ourStrategy} alt="" />
                                        <div>
                                            <h1>our Strategy</h1>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, fugit amet. Ullam iusto, voluptatum praesentium sed natus amet quae atque, animi, consequuntur totam ipsam ut.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='border'>
                                    <div>
                                        <img src={InnovativeDriven} alt="" />
                                        <div>
                                            <h1>Innovation Driven</h1>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, fugit amet. Ullam iusto, voluptatum praesentium sed natus amet quae atque, animi, consequuntur totam ipsam ut.</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        <div className='text-center' style={{ padding: '20px 0 35px' }}>
                            <button className='Btn mx-auto'><Link to="#home" className='text-decoration-none text-white'>Learn more</Link></button>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </section>
            <section className='contactPeraSec border border-danger' style={{ backgroundColor: '#e5e5e5' }}>
                <div className="containerAlignSpace">
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-md-5">
                                <img src={container} className="" style={{ width: '100%', height: '500px' }} alt="..." />
                            </div>
                            <div className="col-md-6 InfoPart" style={{ padding: '50px' }}>
                                <div className="card-body p-0">
                                    <h4 className="card-title">OUR COMPANY</h4>
                                    <h3 className="card-text mt-3">Leading the industry and connecting the world.</h3>
                                    <p className="card-text mt-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                                    <button className='Btn'>Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CnWorld