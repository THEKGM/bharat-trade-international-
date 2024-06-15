import React from "react";
import container from "../../../assets/Images/containerOptPortSeries.jpg";
import { HashLink as Link } from "react-router-hash-link";
import "./connectWorld.css";

function CnWorld() {
  return (
    <>
      <section className="py-3 mt-4" id="WelcomeText">
        <div className="containerAlignSpace text-center">
          <div className='welcomeSpace' style={{
            padding: "50px",
            borderRadius: "10px",
            // boxShadow: "0 4px 17px rgb(255, 234, 177, 1)",
            boxShadow: "0 4px 17px rgb(0, 0, 0, 0.1)",
          }}>
            <h2 data-aos="zoom-in" data-aos-duration="800" className="fw-bold">Welcome to the Bharat Trade International</h2>
            <p data-aos="fade-right" data-aos-duration="800">Welcome for<b> "Embark on a Global import export Journey with Us!"</b> Step into our  world of international trade<br /> and embark on a journey to global success.</p>
            <p data-aos="fade-left" data-aos-duration="800">Discover how we're redefining the export industry, one partnership at a time. From sourcing the finest products to navigating complex regulations, we're here to streamline your export experience and elevate your business to new heights.</p>
            <p data-aos="fade-up" data-aos-duration="800"> Join us as we traverse borders, forge connections, and unlock opportunities in every corner of the globe. Together, let's build bridges, break barriers, and make your export dreams a reality. Welcome aboard!</p>
          </div>
        </div>
      </section>
      <section id="contactParagraphSection">
        <div className="containerAlignSpace">
          <div className="card">
            <div className="row g-0">
              <div
                className="col-lg-6 InfoPart"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="card-body">
                  <h4 className="card-title">OUR COMPANY</h4>
                  <h3 className="card-text">
                    Leading the industry and connecting the world.
                  </h3>
                  <p className="card-text">
                    We specializes in sourcing premium agricultural products
                    from the diverse landscapes of India. Our commitment to
                    sustainability and fair trade practices ensures the delivery
                    of top-quality crops, spices, and organic produce. Through
                    strong partnerships with local farmers, we export the
                    authentic flavors and richness of India's agriculture,
                    maintaining stringent quality control to offer exceptional
                    products to global markets.
                  </p>
                  <Link to="#contactSection">
                    <button className="Btn" id="contactUsButton">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <img src={container} width="100%" height="100%" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CnWorld;
