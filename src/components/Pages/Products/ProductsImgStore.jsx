import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaInfo } from "react-icons/fa"
import { FaArrowLeft } from "react-icons/fa6";

function ProductsImgStore() {
    const [subCategory, setSubCategory] = useState([])
    const [categoryName, setCategoryName] = useState('')
    const Location = useLocation();
    const scrollToTop = useRef();
    const navigate = useNavigate();

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
                        <div className='my-3 py-3 text-center bg-light position-relative'><FaArrowLeft className='position-absolute' style={{ top: '50%', transform: 'translate(0, -50%)', left: '20px' }} onClick={() => navigate('/')} /><h3 className='text-uppercase mb-0' style={{ fontFamily: 'auto', fontWeight: '600' }}>{categoryName || "Category Name"}</h3></div>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-0 p-0">
                            {subCategory && subCategory?.map((item, index) => (
                                <>
                                    <div className="col">
                                        <div className="card border-0 shadow">
                                            <img src={item.subCatProductImage} className='img-fluid' alt={item.subCatProductName} />
                                            <div className="card-body bg-light border">
                                                <h5 className="card-title">{item.subCatProductName || "Title"}</h5>
                                                <Link href="#" className="" data-bs-toggle="modal" data-bs-target={`#staticBackdrop${index}`}><FaInfo /> Read More</Link>
                                                <div className="modal fade" id={`staticBackdrop${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                    <div className="modal-dialog m-0">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="staticBackdropLabel">{item.subCatProductName}</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className='row d-flex align-items-center'>
                                                                    <div className='col-md-6'>
                                                                        <img src={item.subCatProductImage} width={300} height={100} className='img-fluid rounded' alt={item.subCatProductName} />
                                                                    </div>
                                                                    <div className='modelDetails col-md-6'>
                                                                        <table>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>category</td>
                                                                                    <td>{categoryName}</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>HS Code</td>
                                                                                    <td>{item.subCatProductId}</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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