import React from 'react';
import profileImage from "../../../assets/Images/IMG_20240225_152048_397.png";
import profileImageTwo from "../../../assets/Images/profile-image.jpg";
import profileImageThree from "../../../assets/Images/8058410205.png";
import "./owner.css";

function Owners() {
    const ownerData = [
        {
            ownerId: 1,
            ownerName: "Savan Navadiya",
            ownerQuote: "At Bharat Trade International, we stand as a premier entity in the import and export domain, dedicated to fostering global trade. Our unwavering mission is to streamline international commerce by delivering streamlined and affordable solutions to businesses across all scales. Backed by a proficient team and a robust global network, we guarantee seamless operations, punctual deliveries, and unparalleled customer support. Discover more about our company ethos, values, and relentless pursuit of excellence by exploring our comprehensive About Us page.",
            ownerPosition: "Founder at BTI",
            ownerImage: <img src={profileImageThree} alt="" data-aos="zoom-in" data-aos-duration="1200" />,
        },
        {
            ownerId: 2,
            ownerName: "Piyush Kumar Narola",
            ownerQuote: "We take pride in our position as a prominent figure in the import and export landscape, dedicated to simplifying global commerce. Our mission is to empower businesses of all sizes with streamlined solutions that optimize efficiency and reduce costs. With a highly skilled team and a vast global network, we guarantee smooth operations, on-time deliveries, and exceptional service quality. Visit our About Us page to uncover our core values, company culture, and unwavering commitment to excellence.",
            ownerPosition: "Founder at BTI",
            ownerImage: <img src={profileImage} alt="" data-aos="zoom-in" data-aos-duration="1200" />,
        },
        {
            ownerId: 3,
            ownerName: "Nikul Navadiya",
            ownerQuote: '"Bharat Trade International International sets the benchmark as a trusted leader in the import and export realm, committed to facilitating seamless global transactions. Our overarching goal is to empower businesses with efficient, cost-effective solutions tailored to their unique needs. Backed by a proficient team and extensive global reach, we ensure precision, reliability, and unparalleled customer satisfaction. Explore our About Us page to delve deeper into our ethos, values, and dedication to driving international trade forward."',
            ownerPosition: "Founder at BTI",
            ownerImage: <img src={profileImageTwo} alt="" data-aos="zoom-in" data-aos-duration="1200" />,
        },

    ];

    return (
        <section id='ownersSpace' className='bg-light'>
            <h3 data-aos="zoom-in" className='text-center my-3' data-aos-duration="1200">Welcome, to the Bharat Trade International</h3>
            <div className='containerAlignSpace bg-white'>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {ownerData.map((owner, index) => (
                            <div key={owner.ownerId} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <div className='OwnersMainPart row py-md-4 px-md-4 g-0'>
                                    <div className='col-12 col-lg-6'>{owner.ownerImage}</div>
                                    <div className='col-12 col-lg-6 infoChild'>
                                        <p style={{ marginTop: "20px", minHeight: '195px' }} data-aos="fade-down" data-aos-duration="1200">{owner.ownerQuote}</p>
                                        <h5 data-aos="fade-right" data-aos-duration="1200">{owner.ownerName}</h5>
                                        <h6 data-aos="fade-up" data-aos-duration="1200">{owner.ownerPosition}</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Owners;
