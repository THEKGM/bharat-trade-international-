import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaInfo } from "react-icons/fa"

function ProductsImgStore() {
    const [subCategory, setSubCategory] = useState([])
    const [categoryName, setCategoryName] = useState('')
    const Location = useLocation();
    useEffect(() => {
        const data = Location.state;
        setSubCategory(data[0]);
        setCategoryName(data[1]);
    }, [Location.state])
    return (
        <>
            <section id='ProductsImgStore'>
                <div className='containerAlignSpace'>
                    <div className="AllProductsSpace">
                        <div className='my-3 py-3 text-center bg-light'><h3 className='text-uppercase mb-0' style={{ fontFamily: 'auto', fontWeight: '600' }}>{categoryName || "Category Name"}</h3></div>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-0 p-0">
                            {subCategory && subCategory?.map((item) => (
                                <>
                                    <div className="col">
                                        <div className="card border-0 shadow">
                                            <img src={item.subCatProductImage} className='img-fluid' alt={item.subCatProductName} />
                                            <div className="card-body bg-light border">
                                                <h5 className="card-title">{item.subCatProductName || "Title"}</h5>
                                                <Link href="#" className=""><FaInfo /> Read More</Link>
                                            </div>
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

export default ProductsImgStore