import React from 'react'
import profileImage from "../../../assets/Images/profileImg.jpg"
// import quoteImg from "../../assets/svg/singleQuote.svg"
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
                            <h3 data-aos="zoom-in" data-aos-duration="1200">Welcome, to the <br /> Bharat Trade International</h3>
                            <p style={{ marginTop: "20px" }} data-aos="fade-down" data-aos-duration="1200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime dolore minus consectetur tempore est, magni cumque ipsa quae distinctio cupiditate incidunt tempora repellat placeat? Cumque, nobis officiis voluptate veritatis eligendi voluptas delectus? Praesentium, vero aut, unde dignissimos quod culpa, blanditiis odit possimus consectetur molestiae pariatur odio quae consequatur sit.</p>
                            <h5 data-aos="fade-right" data-aos-duration="1200">Owners Name</h5>
                            {/* <br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, soluta quibusdam iure perspiciatis nihil ipsam eum. Adipisci nihil expedita aliquid.soluta quibusdam iure perspiciatis nihil ipsam eum. Adipisci nihil expedita aliquid.</p> */}
                            <h6 data-aos="fade-up" data-aos-duration="1200">Owners Position</h6>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Owners