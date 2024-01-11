import React from 'react'
import InnovativeDriven from "../../../assets/Images/InnovativeDriven.jpg"
import leadership from "../../../assets/Images/leadership.jpg"
import ourStrategy from "../../../assets/Images/ourStrategy.jpg"
import "./connection.css"

function Connection() {
    return (
        <>
            <section id='connectWorldSec' className='border bg-light'>
                <div style={{ width: '100%', height: '70%', backgroundColor: '#f19a0e' }} className='bgColor'></div>
                <div style={{ width: '100%', height: '30%', backgroundColor: 'lightgray' }} className='bgColor'></div>
                <div className="containerDiv innerDiv">
                    <div className='border border-dark p-3'>
                        <div className='headingSpace'>
                            <h1>We Connect the World</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nihil.</p>
                        </div>

                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <div className="card h-100">
                                    <img src={leadership} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Leadership</h5>
                                        <p className="card-text">Suspendisse vulputate eros in velit fermentum cursus. Nulla fringilla justo tellus, at sodales eros laoreet a. Quisque facilisis lorem augue, sit amet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img src={ourStrategy} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Our Strategy</h5>
                                        <p className="card-text">Suspendisse vulputate eros in velit fermentum cursus. Nulla fringilla justo tellus, at sodales eros laoreet a. Quisque facilisis lorem augue, sit amet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img src={InnovativeDriven} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Innovation Driven</h5>
                                        <p className="card-text">Suspendisse vulputate eros in velit fermentum cursus. Nulla fringilla justo tellus, at sodales eros laoreet a. Quisque facilisis lorem augue, sit amet</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Connection