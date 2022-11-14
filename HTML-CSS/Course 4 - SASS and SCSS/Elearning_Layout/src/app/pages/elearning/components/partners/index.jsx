import React from "react";
import booking from "src/assets/imgs/booking.svg";
import volkswagen from "src/assets/imgs/volkswagen.svg";
import mercedes from "src/assets/imgs/mercedes.svg";
import pinterest from "src/assets/imgs/pinterest.svg";
import adidas from "src/assets/imgs/adidas.svg";
import paypal from "src/assets/imgs/paypal.svg";

import "./partners.scss";

export const Partners = () => {
  return (
    <section className="partners">
      <div className="partners-title">
        <h3>Trusted by companies of all sizes</h3>
      </div>
      <div className="partners-content">
        <div className="partners-item">
          <img src={booking} alt="partner-logo" />
        </div>
        <div className="partners-item">
          <img src={volkswagen} alt="partner-logo" />
        </div>
        <div className="partners-item">
          <img src={mercedes} alt="partner-logo" />
        </div>
        <div className="partners-item">
          <img src={pinterest} alt="partner-logo" />
        </div>
        <div className="partners-item">
          <img src={adidas} alt="partner-logo" />
        </div>
        <div className="partners-item">
          <img src={paypal} alt="partner-logo" />
        </div>
      </div>
    </section>
  );
};
