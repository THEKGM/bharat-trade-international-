import React from 'react'
import profileImage from "../../assets/Images/profileImg.jpg"
// import quoteImg from "../../assets/svg/singleQuote.svg"

function Owners() {
    return (
        <>
            <section id='ownersSpace' className='bg-light'>
                <div className='containerAlignSpace bg-white'>
                    <div className='OwnersMainPart row py-md-5 px-md-4'>
                        {/* <img src={quoteImg} width={50} height={50} alt="" /> */}
                        <div className='col-12 col-lg-6'>
                            <img src={profileImage} alt="" />
                        </div>
                        <div className='col-12 col-lg-6 infoChild'>
                            <h3>Welcome, to the <br /> Bharat Trade International</h3>
                            <p style={{ marginTop: "20px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime dolore minus consectetur tempore est, magni cumque ipsa quae distinctio cupiditate incidunt tempora repellat placeat? Cumque, nobis officiis voluptate veritatis eligendi voluptas delectus? Praesentium, vero aut, unde dignissimos quod culpa, blanditiis odit possimus consectetur molestiae pariatur odio quae consequatur sit.</p>
                            <h5>Owners Name</h5>
                            {/* <br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, soluta quibusdam iure perspiciatis nihil ipsam eum. Adipisci nihil expedita aliquid.soluta quibusdam iure perspiciatis nihil ipsam eum. Adipisci nihil expedita aliquid.</p> */}
                            <h6>Owners Position</h6>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Owners