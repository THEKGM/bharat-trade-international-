import React from 'react'
import "./chooseUs.css"
import PriceTag from "../../../assets/svg/bestPricing.svg"
import packaging from "../../../assets/svg/package.svg"
import thumbsUp from "../../../assets/svg/thumpsUp.svg"
import clock from "../../../assets/svg/clock.svg"

function ChooseUs() {
    return (
        <>
            <div className='choosingUS'>
                <div className="containerDiv">
                    <div className='text-center py-2'>
                        <h3>Why Choose US?</h3>
                        <hr />
                    </div>
                    <div className="container text-center">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3">
                            <div className="col">
                                <div className="p-3">
                                    {/* <i className="fa-solid fa-money-bill-transfer"></i> */}
                                    <img src={PriceTag} width={40} height={40} alt="" />
                                    <h3>Best Price</h3>
                                    <p>"We Give best price to our customers!"</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="p-3">
                                    <img src={packaging} width={40} height={40} alt="" />
                                    <h3>Best Packaging</h3>
                                    <p>"We Give best Packaging to our customers Products!"</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="p-3">
                                    <img src={thumbsUp} width={40} height={40} alt="" />
                                    <h3>Quality Products</h3>
                                    <p>"Bharat Trade International believe in Quality and commitments!"</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="p-3">
                                    <img src={clock} width={40} height={40} alt="" />
                                    <h3>On Time Shipment</h3>
                                    <p>"We Dedicated Order Fulfillment To On Time Shipment!"</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="p-3">
                                    <img src={PriceTag} width={40} height={40} alt="" />
                                    <h3>Best Price</h3>
                                    <p>"We Give best price to our customers!"</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="p-3">
                                    <img src={PriceTag} width={40} height={40} alt="" />
                                    <h3>Best Price</h3>
                                    <p>"We Give best price to our customers!"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChooseUs