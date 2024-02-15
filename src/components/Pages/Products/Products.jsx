import React from 'react'
import "./products.css"
import { useNavigate } from 'react-router-dom'
import { products } from '../../../Data/products';

function Products() {
    const navigate = useNavigate();
    const handleProductCategory = (subCategory, categoryName) => {
        localStorage.setItem('category', categoryName)
        navigate("/productsImgStore", { state: subCategory })
        window.location.reload();
    }
    return (
        <>
            <section id='productImagesSection' className='product-images-section'>
                <div className='productImageSpace'>
                    <div className='product-info py-2 text-white' data-aos="zoom-in">
                        <h1>Digital Design.</h1>
                        <p className='text-break'>"Dive into a variety that redefines choices, elevating your experience with our exceptional offerings."</p>
                    </div>
                    <div className="text-center p-0">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 p-0 m-0" id="productGrid">
                            {products.map((value) => (
                                <>
                                    <div className="col product-item" data-aos="flip-left" data-aos-duration="900">
                                        <div onClick={() => handleProductCategory(value.subCategory, value.categoryName)}>
                                            <img src={value.categoryImage} className='img-fluid' alt="Product" />
                                            <div className='px-0'><h5 className='mb-0'>{value.categoryName}</h5></div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Products