import React from 'react'
import productImg from "../../../assets/Images/ourStrategy.jpg"
import "./products.css"

function Products() {
    return (
        <>
            {/* <section id='productImages'>
                <div className='productImageSpace'>
                    <div className='py-2'>
                        <h1>Digital Design.</h1>
                        <p className='text-break'>"Dive into a variety that redefines choices, elevating your experience with our exceptional offerings."</p>
                    </div>
                    <div className="text-center p-0">
                        <div>
                            <p>All</p>
                            <p>Fruits</p>
                            <p>Vegetables</p>
                            <p>Dry Fruits</p>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 p-0 m-0">
                            <div className="col">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="" />
                                    <h5>productName <small>productId</small></h5>
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="" />
                                    <h5>productName <small>productId</small></h5>
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="" />
                                    <h5>productName <small>productId</small></h5>
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="" />
                                    <h5>productName <small>productId</small></h5>
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="" />
                                    <h5>productName <small>productId</small></h5>
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="" />
                                    <h5>productName <small>productId</small></h5>
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="" />
                                    <h5>productName <small>productId</small></h5>
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="" />
                                    <h5>productName <small>productId</small></h5>
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="" />
                                    <h5>productName <small>productId</small></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


            <section id='productImagesSection' className='product-images-section'>
                <div className='productImageSpace'>
                    <div className='product-info py-2'>
                        <h1>Digital Design.</h1>
                        <p className='text-break'>"Dive into a variety that redefines choices, elevating your experience with our exceptional offerings."</p>
                    </div>
                    <div className="text-center p-0">
                        <div className="filter-options">
                            <p>All</p>
                            <p>Fruits</p>
                            <p>Vegetables</p>
                            <p>Dry Fruits</p>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 p-0 m-0" id="productGrid">
                            <div className="col product-item">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="Product" />
                                    <h5>productName <small>productId</small></h5>
                                </div>
                            </div>
                            <div className="col product-item">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="Product" />
                                    <h5>productName <small>productId</small></h5>
                                </div>
                            </div>
                            <div className="col product-item">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="Product" />
                                    <h5>productName <small>productId</small></h5>
                                </div>
                            </div>
                            <div className="col product-item">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="Product" />
                                    <h5>productName <small>productId</small></h5>
                                </div>
                            </div>
                            <div className="col product-item">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="Product" />
                                    <h5>productName <small>productId</small></h5>
                                </div>
                            </div>
                            <div className="col product-item">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="Product" />
                                    <h5>productName <small>productId</small></h5>
                                </div>
                            </div>
                            <div className="col product-item">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="Product" />
                                    <h5>productName <small>productId</small></h5>
                                </div>
                            </div>
                            <div className="col product-item">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="Product" />
                                    <h5>productName <small>productId</small></h5>
                                </div>
                            </div>
                            <div className="col product-item">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="Product" />
                                    <h5>productName <small>productId</small></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Products