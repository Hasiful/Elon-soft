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
      <div className="bg-base py-3">
        <div className="container">
          <div className="flex items-center flex-wrap justify-between gap-3">
            <div className="flex items-center flex-wrap gap-5">
              <a href="tel:01723507989" className="flex items-center gap-2">
                <span className="h-8 w-8 grid place-content-center bg-white text-lg rounded-sm text-white bg-opacity-10">
                  <MdLocalPhone />
                </span>
                <span className="text-white">01723507989</span>
              </a>
              <a
                href="mailto:elon@info.com"
                className="flex items-center gap-2"
              >
                <span className="h-8 w-8 grid place-content-center bg-white text-lg rounded-sm text-white bg-opacity-10">
                  <MdEmail />
                </span>
                <span className="text-white">elon@info.com</span>
              </a>
            </div>
            <div className="flex items-center-justify-end gap-3 flex-wrap">
              <a
                to="/Home"
                className="h-8 w-8 rounded-sm bg-white text-white grid place-content-center bg-opacity-10 hover:bg-white hover:text-base"
              >
                <FaFacebookF />
              </a>
              <a
                to="/Home"
                className="h-8 w-8 rounded-sm bg-white text-white grid place-content-center bg-opacity-10 hover:bg-white hover:text-base"
              >
                <FaXTwitter />
              </a>
              <a
                to="/Home"
                className="h-8 w-8 rounded-sm bg-white text-white grid place-content-center bg-opacity-10 hover:bg-white hover:text-base"
              >
                <FaYoutube />
              </a>
              <a
                to="/Home"
                className="h-8 w-8 rounded-sm bg-white text-white grid place-content-center bg-opacity-10 hover:bg-white hover:text-base"
              >
                <FaLinkedin />
              </a>
              <a
                to="/Home"
                className="h-8 w-8 rounded-sm bg-white text-white grid place-content-center bg-opacity-10 hover:bg-white hover:text-base"
              >
                <FaPinterestP />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-4">
        <div className="container">
          <div className="flex justify-between items-center space-x-3">
            <a to="/Home" className="max-w-24 w-full">
              <img src={getImgUrl("logo-c.png")} alt="" />
            </a>

            <nav className="flex-1">
              <ul className="flex items-center justify-center gap-6">
                <li>
                  <Link
                    to="/Home"
                    className="font-semibold uppercase text-base hover:text-main"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="font-semibold uppercase text-base hover:text-main"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service"
                    className="font-semibold uppercase text-base hover:text-main"
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="font-semibold uppercase text-base hover:text-main"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="font-semibold uppercase text-base hover:text-main"
                  >
                    contactus
                  </Link>
                </li>
              </ul>
            </nav>

            <a to="/Home" className="btn btn-base">
              Hire us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
