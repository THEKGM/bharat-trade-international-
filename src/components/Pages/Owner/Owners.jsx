import React from 'react'
import profileImage from "../../../assets/Images/profileImg.jpg"
import "./owner.css"

function Owners() {
    return (
        <>
            <section id='ownersSpace' className='bg-light'>
                <div className='containerAlignSpace bg-white'>
                    <div className='OwnersMainPart row py-md-5 px-md-4 g-0'>
                        {/* <img src={quoteImg} width={50} height={50} alt="" /> */}
                        <div className='col-12 col-lg-6'>
                            <img src={profileImage} alt="" data-aos="zoom-in" data-aos-duration="1200" />
                        </div>
                        <div className='col-12 col-lg-6 infoChild'>
                            <h3 data-aos="zoom-in" data-aos-duration="1200">Welcome, to the Bharat Trade International</h3>
                            <p style={{ marginTop: "20px" }} data-aos="fade-down" data-aos-duration="1200">At Bharat Trade International, we stand as a premier entity in the import and export domain, dedicated to fostering global trade. Our unwavering mission is to streamline international commerce by delivering streamlined and affordable solutions to businesses across all scales. Backed by a proficient team and a robust global network, we guarantee seamless operations, punctual deliveries, and unparalleled customer support. Discover more about our company ethos, values, and relentless pursuit of excellence by exploring our comprehensive About Us page.</p>
                            <h5 data-aos="fade-right" data-aos-duration="1200">Owners Name</h5>
                            <h6 data-aos="fade-up" data-aos-duration="1200">Owners Position</h6>
                        </div>
                    </div>
                    {/* <div className='OwnersMainPart row py-md-5 px-md-4 g-0'>
                        <div className='col-12 col-lg-6'>
                            <img src={profileImage} alt="" data-aos="zoom-in" data-aos-duration="1200" />
                        </div>
                        <div className='col-12 col-lg-6 infoChild'>
                            <h3 data-aos="zoom-in" data-aos-duration="1200">Welcome, to the Bharat Trade International</h3>
                            <p style={{ marginTop: "20px" }} data-aos="fade-down" data-aos-duration="1200">"Bharat Trade International International sets the benchmark as a trusted leader in the import and export realm, committed to facilitating seamless global transactions. Our overarching goal is to empower businesses with efficient, cost-effective solutions tailored to their unique needs. Backed by a proficient team and extensive global reach, we ensure precision, reliability, and unparalleled customer satisfaction. Explore our About Us page to delve deeper into our ethos, values, and dedication to driving international trade forward."</p>
                            <h5 data-aos="fade-right" data-aos-duration="1200">Owners Name</h5>
                            <h6 data-aos="fade-up" data-aos-duration="1200">Owners Position</h6>
                        </div>
                    </div>
                    <div className='OwnersMainPart row py-md-5 px-md-4 g-0'>
                        <div className='col-12 col-lg-6'>
                            <img src={profileImage} alt="" data-aos="zoom-in" data-aos-duration="1200" />
                        </div>
                        <div className='col-12 col-lg-6 infoChild'>
                            <h3 data-aos="zoom-in" data-aos-duration="1200">Welcome, to the Bharat Trade International</h3>
                            <p style={{ marginTop: "20px" }} data-aos="fade-down" data-aos-duration="1200">We take pride in our position as a prominent figure in the import and export landscape, dedicated to simplifying global commerce. Our mission is to empower businesses of all sizes with streamlined solutions that optimize efficiency and reduce costs. With a highly skilled team and a vast global network, we guarantee smooth operations, on-time deliveries, and exceptional service quality. Visit our About Us page to uncover our core values, company culture, and unwavering commitment to excellence."</p>
                            <h5 data-aos="fade-right" data-aos-duration="1200">Owners Name</h5>
                            <h6 data-aos="fade-up" data-aos-duration="1200">Owners Position</h6>
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default Owners