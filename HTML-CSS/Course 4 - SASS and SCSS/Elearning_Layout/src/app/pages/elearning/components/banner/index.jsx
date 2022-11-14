import React from "react";
import { Button } from "src/app/components";
import googleBtn from "src/assets/imgs/google_btn.png";
import appleBtn from "src/assets/imgs/apple_btn.png";
// import bgBanner from "src/assets/imgs/pngkit_udemy-logo-png_2223616.png"

import "./banner.scss";

export const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content container">
        <h2>Learn anytime, anywhere</h2>
        <p>Take courses on any of your devices</p>
        <p>Go at your own pace with lifetime access</p>
        <p>Try risk-free with our 30-day money-back guarantee</p>
        <div className="btn-sign-up">
          <Button className="btn-red" text="Sign Up For Free" />
        </div>
        <div className="row logo">
          <div className="col-6 text-right">
            <img src={googleBtn} alt={googleBtn} />
          </div>
          <div className="col-6 text-left">
            <img src={appleBtn} alt={appleBtn} />
          </div>
        </div>
      </div>
    </section>
  );
};
