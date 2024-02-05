import React from 'react'
import { Link } from 'react-router-dom'
import APPLE_IMAGE from "../../../assets/Images/Products/Fruits/apples-Fruits.jpg"
import { FaInfo } from "react-icons/fa"

function ProductsImgStore() {
    return (
        <>
            <section id='ProductsImgStore'>
                <div className='containerAlignSpace'>
                    <div className="AllProductsSpace">
                        <div className='my-3 py-3 text-center bg-light'><h3 className='text-uppercase mb-0' style={{ fontFamily: 'auto', fontWeight: '600' }}>Product Category</h3></div>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-0 p-0">
                            <div className="col">
                                <div className="card border-0">
                                    <img src={APPLE_IMAGE} alt="..." />
                                    <div className="card-body bg-light border">
                                        <h5 className="card-title">Card title</h5>
                                        <Link href="#" className=""><FaInfo /> Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0">
                                    <img src={APPLE_IMAGE} alt="..." />
                                    <div className="card-body bg-light border">
                                        <h5 className="card-title">Card title</h5>
                                        <Link href="#" className=""><FaInfo /> Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0">
                                    <img src={APPLE_IMAGE} alt="..." />
                                    <div className="card-body bg-light border">
                                        <h5 className="card-title">Card title</h5>
                                        <Link href="#" className=""><FaInfo /> Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0">
                                    <img src={APPLE_IMAGE} alt="..." />
                                    <div className="card-body bg-light border">
                                        <h5 className="card-title">Card title</h5>
                                        <Link href="#" className=""><FaInfo /> Read More</Link>
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

export default ProductsImgStore