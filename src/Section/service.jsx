import React from "react";
import { getImgUrl } from "../Utility/geturl";

const Service = () => {
  return (
    <>
      <div className="service-section section-padding">
        <div className="container">
          <div className="section-heading">
            <h3 className="section-heading__title">
              What <span className="text-main">Solutions</span> We Provide
            </h3>
            <p className="section-heading__desc">
              We offer a comprehensive range of services including web
              development, mobile app creation, SEO optimization, and digital
              marketing to help your business thrive online.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
            <div className="service-item">
              <div className="service-item-icon">
                <img src={getImgUrl("w.png")} alt="" />
              </div>
              <h5 className="service-item-title">Web Development</h5>
              <p className="service-item-desc">
                Premium website solution to engage your audiences & convert them
                into your valuable clients.
              </p>
            </div>

            <div className="service-item">
              <div className="service-item-icon">
                <img src={getImgUrl("a.png")} alt="" />
              </div>
              <h5 className="service-item-title">App Development</h5>
              <p className="service-item-desc">
                Premium website solution to engage your audiences & convert them
                into your valuable clients.
              </p>
            </div>

            <div className="service-item">
              <div className="service-item-icon">
                <img src={getImgUrl("s.png")} alt="" />
              </div>
              <h5 className="service-item-title">Software Development</h5>
              <p className="service-item-desc">
                Premium website solution to engage your audiences & convert them
                into your valuable clients.
              </p>
            </div>

            <div className="service-item">
              <div className="service-item-icon">
                <img src={getImgUrl("g.png")} alt="" />
              </div>
              <h5 className="service-item-title">Graphics Design</h5>
              <p className="service-item-desc">
                Premium website solution to engage your audiences & convert them
                into your valuable clients.
              </p>
            </div>

            <div className="service-item">
              <div className="service-item-icon">
                <img src={getImgUrl("m.png")} alt="" />
              </div>
              <h5 className="service-item-title">Digital Marketing</h5>
              <p className="service-item-desc">
                Premium website solution to engage your audiences & convert them
                into your valuable clients.
              </p>
            </div>

            <div className="service-item">
              <div className="service-item-icon">
                <img src={getImgUrl("e.png")} alt="" />
              </div>
              <h5 className="service-item-title">E-Commerce Development</h5>
              <p className="service-item-desc">
                Premium website solution to engage your audiences & convert them
                into your valuable clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
