import React from 'react'
import productImg from "../../../assets/Images/ourStrategy.jpg"
import "./products.css"
// import { useNavigate } from 'react-router-dom'
// import ProductsImgStore from './ProductsImgStore'

function Products() {
    // const navigate = useNavigate();

    // const goToProducts = () => {
    //     // navigate(<ProductsImgStore />)
    // };
    return (
        <>
            <section id='productImagesSection' className='product-images-section'>
                <div className='productImageSpace'>
                    <div className='product-info py-2 text-white'>
                        <h1>Digital Design.</h1>
                        <p className='text-break'>"Dive into a variety that redefines choices, elevating your experience with our exceptional offerings."</p>
                    </div>
                    <div className="text-center p-0">
                        {/* <div className="filter-options">
                            <p>All</p>
                            <p>Fruits</p>
                            <p>Vegetables</p>
                            <p>Dry Fruits</p>
                        </div> */}
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 p-0 m-0" id="productGrid">
                            <div className="col product-item" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="Product" />
                                    <h5>productName <small>productId</small></h5>
                                </div>
                            </div>
                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            Other category images
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Understood</button>
                                        </div>
                                    </div>
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