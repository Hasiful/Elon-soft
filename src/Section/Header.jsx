import React, { useState } from "react";
import { getImgUrl } from "../Utility/geturl";
import { MdLocalPhone, MdEmail, MdOutlineFacebook } from "react-icons/md";
import {
  FaXTwitter,
  FaYoutube,
  FaFacebookF,
  FaLinkedin,
  FaPinterestP,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" py-4 bg-base">
        <div className="container">
          <div className="flex justify-between items-center space-x-3">
            <Link to="/Home" className="max-w-24 w-full">
              <img src={getImgUrl("logo.png")} alt="" />
            </Link>

            <nav className="flex-1">
              <ul className="flex items-center justify-center gap-6">
                <li>
                  <Link
                    to="/Home"
                    className="font-semibold uppercase text-base hover:text-main text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="font-semibold uppercase text-base hover:text-main text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service"
                    className="font-semibold uppercase text-base hover:text-main text-white"
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="font-semibold uppercase text-base hover:text-main text-white"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="font-semibold uppercase text-base hover:text-main text-white"
                  >
                    contactus
                  </Link>
                </li>
              </ul>
            </nav>

            <Link to="/Home" className="btn btn-base">
              Hire us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
