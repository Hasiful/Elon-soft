import React from "react";
import { getImgUrl } from "../Utility/geturl";

const Technology = () => {
  return (
    <>
      <section className="tech section-padding">
        <div className="container">
          <div className="tech-wrapper">
            <div className="tech-left">
              <div className="circle-wrapper">
                <div class="big-circle">
                  <div class="icon-block">
                    <img src={getImgUrl("dokan.webp")} alt="web design icon" />
                  </div>
                  <div class="icon-block">
                    <img src={getImgUrl("js.png")} alt="game design icon" />
                  </div>
                  <div class="icon-block">
                    <img src={getImgUrl("boots.jpeg")} alt="game dev icon" />
                  </div>
                  <div class="icon-block">
                    <img src={getImgUrl("mysql.png")} alt="ui-ux icon" />
                  </div>
                </div>
                <div class="circle">
                  <div class="icon-block">
                    <img src={getImgUrl("html.png")} alt="icon" />
                  </div>
                  <div class="icon-block">
                    <img src={getImgUrl("css.png")} alt="icon" />
                  </div>
                  <div class="icon-block">
                    <img src={getImgUrl("react.png")} alt="icon" />
                  </div>
                  <div class="icon-block">
                    <img
                      src={getImgUrl("wordpress.png")}
                      alt="artificial intelligence icon"
                    />
                  </div>
                </div>
                <div class="center-logo">
                  <img src={getImgUrl("laravel.png")} alt="logo" />
                </div>
              </div>
            </div>
            <div className="tech-content">
              <div className="section-heading style-left">
                <p class="flex font-semibold mb-2 gap-3">
                  Technology
                  <span class="max-w-6 flex">
                    <img src={getImgUrl("star.webp")} alt="icon" />
                  </span>
                </p>
                <h3 className="section-heading__title">
                  WE <span className="text-main">Technology</span> We Used
                </h3>
                <p className="section-heading__desc">
                  We offer a comprehensive range of services including web
                  development, mobile app creation, SEO optimization, and
                  digital marketing to help your business thrive online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technology;
