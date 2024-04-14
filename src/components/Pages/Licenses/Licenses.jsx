import React, { useEffect } from "react";
import styled from "styled-components";
import APEDA_LICENSES_IMAGE from "../../../assets/Images/Licenses/apeda-logo-removebg-preview.png";
import FIEO_LICENSES_IMAGE from "../../../assets/Images/Licenses/fieo-logo.webp";
import FSSAI_LICENSES_IMAGE from "../../../assets/Images/Licenses/FSSAI_logo.png";
import GNOFT_LICENSES_IMAGE from "../../../assets/Images/Licenses/general_of_foreign-trade.jpg";
import IEC_LICENSES_IMAGE from "../../../assets/Images/Licenses/iec-code.jpeg";
import MAKE_IN_INDIA_LICENSES_IMAGE from "../../../assets/Images/Licenses/make-in-india-logo.jpg";
import MEME_LICENSES_IMAGE from "../../../assets/Images/Licenses/msme-removebg-preview.png";
import SBOINDIA_LICENSES_IMAGE from "../../../assets/Images/Licenses/Spices_Board_of_India_Logo.png";
import { Splide } from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "./licenses.css";

const Backer = styled.div`
  width: 300px;
  margin: 0 15px;
  img {
    height: 300px;
    width: 300px;
    object-fit: contain;
  }
  @media screen and (max-width: 768px) {
    width: 100px;
  }
`;

const licenses = [
  APEDA_LICENSES_IMAGE,
  FIEO_LICENSES_IMAGE,
  FSSAI_LICENSES_IMAGE,
  GNOFT_LICENSES_IMAGE,
  IEC_LICENSES_IMAGE,
  MAKE_IN_INDIA_LICENSES_IMAGE,
  MEME_LICENSES_IMAGE,
  SBOINDIA_LICENSES_IMAGE,
];

function Licenses() {
  useEffect(() => {
    const splide = new Splide(".splide", {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: 3,
      autoScroll: {
        speed: 1,
      },
    });

    splide.mount({ AutoScroll });
  }, []);

  return (
    <section className="py-5">
      <div className="containerAlignSpace">
        <div className="text-center">
          <h3
            className="py-3 text-white"
            style={{ backgroundColor: "#f1c40f" }}
          >
            Our Membership
          </h3>
        </div>

        {/* Splide container */}
        <div className="mt-3 splide">
          <div className="splide__track overflow-hidden py-2">
            <ul className="splide__list d-flex gap-5 py-4 py-md-5">
              {licenses.map((item, ind) => (
                <li
                  key={ind}
                  className="splide__slide"
                  style={{
                    listStyleType: "none",
                  }}
                >
                  <Backer>
                    <img src={item} alt="" className="img-fluid" />
                  </Backer>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Licenses;
