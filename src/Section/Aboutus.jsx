import React from "react";
import { getImgUrl } from "../Utility/geturl";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <section className="about-section section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="about-content">
              <div className="section-heading style-left">
                <p class="flex font-semibold mb-2 gap-3">
                  About Our Company
                  <span class="max-w-6 flex">
                    <img src={getImgUrl("star.webp")} alt="icon" />
                  </span>
                </p>
                <h3 className="section-heading__title">
                  WE HELP BUSINESSES <span className="text-main">ELONIT</span>{" "}
                  SOFTGROW USING
                  <span className="text-secondary">TECHNOLOGY</span>
                </h3>
                <p className="section-heading__desc">
                  We offer a comprehensive range of services including web
                  development, mobile app creation, SEO optimization, and
                  digital marketing to help your business thrive online.
                </p>

                <Link to="/Home" className="btn btn-base mt-5">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="about-thumb">
              <img src={getImgUrl("about.webp")} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
