import React from 'react'
import productImg from "../../../assets/Images/ourStrategy.jpg"
import "./products.css"
import { useNavigate } from 'react-router-dom'
// import ProductsImgStore from './ProductsImgStore';
// import FRUIT_IMAGE from "../../../assets/Images/Products/Fruits/apples-3580560_1920.jpg"

function Products() {
    const navigate = useNavigate();
    const imagesCategory = ['', '', '', '', '', '', '', '', ''];
    const handleProductCategory = () => {
        console.log("clicked event...!")
        // navigate(<ProductsImgStore />)
        navigate("/productsImgStore")
    }
    return (
        <>
            <section id='productImagesSection' className='product-images-section'>
                <div className='productImageSpace'>
                    <div className='product-info py-2 text-white'>
                        <h1>Digital Design.</h1>
                        <p className='text-break'>"Dive into a variety that redefines choices, elevating your experience with our exceptional offerings."</p>
                    </div>
                    <div className="text-center p-0">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 p-0 m-0" id="productGrid">
                            <div className="col product-item">
                                <div onClick={handleProductCategory}>
                                    <img src={productImg} className='img-fluid' alt="Product" />
                                    {/* <h5>productName <small>productId</small></h5> */}
                                    <span>Category</span>
                                </div>
                            </div>
                            <div className="col product-item">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="Product" />
                                    {/* <h5>productName <small>productId</small></h5> */}
                                    <span>Category</span>
                                </div>
                            </div>
                            <div className="col product-item">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="Product" />
                                    {/* <h5>productName <small>productId</small></h5> */}
                                    <span>Category</span>
                                </div>
                            </div>
                            <div className="col product-item">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="Product" />
                                    {/* <h5>productName <small>productId</small></h5> */}
                                    <span>Category</span>
                                </div>
                            </div>
                            <div className="col product-item">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="Product" />
                                    {/* <h5>productName <small>productId</small></h5> */}
                                    <span>Category</span>
                                </div>
                            </div>
                            <div className="col product-item">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="Product" />
                                    {/* <h5>productName <small>productId</small></h5> */}
                                    <span>Category</span>
                                </div>
                            </div>
                            <div className="col product-item">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="Product" />
                                    {/* <h5>productName <small>productId</small></h5> */}
                                    <span>Category</span>
                                </div>
                            </div>
                            <div className="col product-item">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="Product" />
                                    {/* <h5>productName <small>productId</small></h5> */}
                                    <span>Category</span>
                                </div>
                            </div>
                            <div className="col product-item">
                                <div>
                                    <img src={productImg} className='img-fluid' alt="Product" />
                                    {/* <h5>productName <small>productId</small></h5> */}
                                    <span>Category</span>
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