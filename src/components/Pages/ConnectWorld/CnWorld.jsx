import React from 'react'
import container from "../../../assets/Images/container-operation-port-series.jpg"
import { HashLink as Link } from "react-router-hash-link"
import "./connectWorld.css"

function CnWorld() {
    return (
        <>
            <section id="contactParagraphSection">
                <div className="containerAlignSpace">
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-lg-6 InfoPart" data-aos="fade-right" data-aos-duration="800">
                                <div className="card-body">
                                    <h4 className="card-title">OUR COMPANY</h4>
                                    <h3 className="card-text">Leading the industry and connecting the world.</h3>
                                    <p className="card-text">We specializes in sourcing premium agricultural products from the diverse landscapes of India. Our commitment to sustainability and fair trade practices ensures the delivery of top-quality crops, spices, and organic produce. Through strong partnerships with local farmers, we export the authentic flavors and richness of India's agriculture, maintaining stringent quality control to offer exceptional products to global markets.</p>
                                    <Link to='#contactSection'><button className='Btn' id="contactUsButton">Contact Us</button></Link>
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="fade-left" data-aos-duration="800">
                                <img src={container} width='100%' height='100%' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default CnWorld