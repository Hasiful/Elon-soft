import React from "react";
import { getImgUrl } from "../Utility/geturl";

const Banner = () => {
  return (
    <div className="py-32">
      <div className="container">
        <div className="grid grid-cols-2">
          <div>
            <p className="flex font-semibold mb-2 gap-3">
              WELCOME TO VAULT.
              <span className="max-w-6 flex">
                <img src={getImgUrl("star.webp")} alt="icon" />
              </span>
            </p>

            <h1 className="text-6xl">
              Our technology. Your
              <div class="Hero_placeholder__jC1Mu">words.</div>
              <div class="Hero_wordsContainer__UFEkG">
                <span class="Hero_word">brand.</span>
                <span class="Hero_word">data.</span>
                <span class="Hero_word">customers.</span>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
