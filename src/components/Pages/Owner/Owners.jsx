import React from 'react';
import profileImage from "../../../assets/Images/profileImgPN.png";
import profileImageTwo from "../../../assets/Images/profileImgNN.jpg";
import profileImageThree from "../../../assets/Images/profileImgSN.png";
import "./owner.css";

function Owners() {
    const ownerData = [
        {
            ownerId: 1,
            ownerName: "Savan Navadiya",
            ownerQuote: "At Bharat Trade International, we stand as a premier entity in the import and export domain, dedicated to fostering global trade. Our unwavering mission is to streamline international commerce by delivering streamlined and affordable solutions to businesses across all scales.",
            ownerPosition: "Founder at BTI",
            ownerImage: profileImageThree,
        },
        {
            ownerId: 2,
            ownerName: "Piyush Kumar Narola",
            ownerQuote: "We take pride in our position as a prominent figure in the import and export landscape, dedicated to simplifying global commerce. Our mission is to empower businesses of all sizes with streamlined solutions that optimize efficiency and reduce costs.",
            ownerPosition: "Founder at BTI",
            ownerImage: profileImage,
        },
        {
            ownerId: 3,
            ownerName: "Nikul Navadiya",
            ownerQuote: '"Bharat Trade International International sets the benchmark as a trusted leader in the import and export realm, committed to facilitating seamless global transactions. Our overarching goal is to empower businesses with efficient, cost-effective solutions tailored to their unique needs."',
            ownerPosition: "Founder at BTI",
            ownerImage: profileImageTwo,
        },

    ];

    return (
        <section id='ownersSpace' className='bg-light py-3 pb-5'>
            <h3 className='text-center my-3 pb-3'>Core Team of BTI</h3>
            <div className='containerAlignSpace'>
                <div className="row row-cols-1 row-cols-md-2 row-cols-md-3 g-4">
                    {ownerData.map((owner, index) => (
                        <div className="col" key={index}>
                            <div className="card h-100 border-0 shadow py-3">
                                <img src={owner.ownerImage} className="card-img-top mx-auto img-fluid object-fit-cover rounded-circle" style={{ maxHeight: "300px", height: "200px", width: "200px" }} alt="..." />
                                <div className="card-body text-center mt-2">
                                    <h5 className="card-title">{owner.ownerName}</h5>
                                    <h5 className="card-title my-1">{owner.ownerPosition}</h5>
                                    <p className="card-text pt-3">{owner.ownerQuote}</p>
                                </div>
                                <span className='bottom-line' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Owners;
