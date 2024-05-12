import React from "react";
import images from "../../constant/images";
import "./partner.css";

const Partner = () => {
  return (
    <div className="app__parteners section-padding">
      <div className="app__parteners-wrapper section-padding">
        <img src={images.booking} alt="booking" />
        <img src={images.airbnb} alt="airbnb" />
        <img src={images.expedia} alt="expedia" />
      </div>
    </div>
  );
};

export default Partner;
