import React from "react";
import images from "../../constant/images";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="app_categories section-padding">
      <p className="p__poppins">CATEGORY</p>
      <h1 className="headtext"> We Offer Best Services</h1>
      <div className="app_categories_cards-container section-padding">
        <div className="app_categories_cards-container_card section-padding">
          <img src={images.weather} alt="weather" />
          <h4 className="title-text">Calculated Weather</h4>
          <p className="p__poppins">
            Built Wicket longer admire do barton vanity itself do in it.
          </p>
        </div>
        <div className="app_categories_cards-container_card section-padding ">
          <img src={images.planeIcon} alt="plan" />
          <h4 className="title-text">Best Flights</h4>
          <p className="p__poppins">
            Engrossed listening. Park gate sell they west hard for the.
          </p>
        </div>
        <div className="app_categories_cards-container_card section-padding">
          <img src={images.micIcon} alt="mic" />
          <h4 className="title-text">Local Events</h4>
          <p className="p__poppins">
            Barton vanity itself do in it. Preferd to men it engrossed
            listening.{" "}
          </p>
        </div>
        <div className="app_categories_cards-container_card section-padding">
          <img src={images.custimze} alt="" />
          <h4 className="title-text">Customization</h4>
          <p className="p__poppins">
            We deliver outsourced aviation services for military customers
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
