import React from 'react'
import homeBgImage from "../../../assets/Images/portHome.jpg"
import "./home.css"

function Home() {
    return (
        <>
            <section id='homeSec'>
                <div className='homeBgPart'>
                    {/* <img src={homeBgImage} alt="" className='img-fluid' /> */}
                    <div className="containerDiv">
                        <div className='homeBgWall'></div>
                        <div className='homeOverlayPart'>
                            <div className='landingOverlaySpace'>
                                <h4>OUR COMPANY</h4>
                                <h1>Customer First, People Led, Innovation Driven</h1>
                                <button className='Btn'>contact us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home