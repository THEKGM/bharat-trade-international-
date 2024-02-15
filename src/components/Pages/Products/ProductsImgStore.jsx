import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaInfo } from "react-icons/fa"

function ProductsImgStore() {
    const [subCategory, setSubCategory] = useState([])
    const [categoryName, setCategoryName] = useState('')
    const Location = useLocation();
    const scrollToTop = useRef();

    const scrollToTopView = () => {
        scrollToTop.current.scrollTop = { behavior: 'smooth' };
    }

    useEffect(() => {
        const data = Location.state;
        setSubCategory(data)
        if (subCategory) {
            const category = localStorage.getItem('category');
            setCategoryName(category);
        } else {
            setCategoryName('')
        }
        scrollToTopView()
    }, [])

    return (
        <>
            <section id='ProductsImgStore' ref={scrollToTop}>
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
                                                <Link href="#" className="" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><FaInfo /> Read More</Link>
                                                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="staticBackdropLabel">{item.subCatProductName}</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                This is {item.subCatProductName}
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="Btn" style={{ padding: '7px 15px', borderRadius: '6px' }}>Inquiry</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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