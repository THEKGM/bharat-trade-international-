import React from 'react'
import { Link } from 'react-router-dom'
import Header_Logo from "../../../assets/Images/headerImageCroped.jpg"
import './header.css'

function Header() {
  // const applyStyles = (text) => (
  //   text.split('').map((char, index) => (
  //     <span
  //       key={index}
  //       style={{
  //         color: index < 6 ? 'orange' : index < 9 ? 'white' : index < 10 ? 'blue' : index < 12 ? 'white' : 'green',
  //       }}
  //     >
  //       {char}
  //     </span>
  //   ))
  // );
  return (
    <>
      <section id='headerSec'>
        <div className='containerDiv'>
          <nav className='Nav_Bar navbar navbar-expand-lg bg-body-tertiary'>
            <div className="container-fluid">
              <Link to='BharatTradeInternational'>
                {/* <h6>BharatTradeInternational</h6> */}
                <img src={Header_Logo} className='img-fluid' height={80} width={80} alt="" />
              </Link>
              <button className="btn btn-primary navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                  <Link>
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">BHARAT TRADE INTERNATIONAL</h5>
                    {/* <h5 className="offcanvas-title" id="offcanvasRightLabel">
                      {applyStyles('BHARAT TRADE INTERNATIONAL')}
                    </h5> */}
                  </Link>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <ul>
                    <li><Link>Home</Link></li>
                    <li><Link>Categories</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  )
}

export default Header