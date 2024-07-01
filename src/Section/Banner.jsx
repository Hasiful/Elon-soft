import React from "react";
import { getImgUrl } from "../Utility/geturl";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-content">
            <p className="flex text-white font-semibold mb-2 gap-3">
              WELCOME TO VAULT.
              <span className="max-w-6 flex">
                <img src={getImgUrl("star.webp")} alt="icon" />
              </span>
            </p>
            <h1 className="banner-title text-white">
              Helping Global Brands With{" "}
              <span className="text-secondary">Digital Products</span>{" "}
              Proffessional
              <span className="text-main"> IT Services</span>
            </h1>

            <a href="" class="banner-btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              REQUEST A QUOTE
            </a>
          </div>

          <div className="banner-thumb">
            <img src={getImgUrl("banner.png")} alt="banner-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
