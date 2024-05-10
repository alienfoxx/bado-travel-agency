import React from "react";
import images from "../../constant/images";
import "./Destination.css";
import { FaLocationArrow } from "react-icons/fa";

const Destination = () => {
  return (
    <div className="app__destination section-padding">
      <p className="p__poppins">DESTINATIONS</p>
      <h1 className="headtext"> Top Destinations</h1>
      <div className="app__destination-cards_container section-padding">
        <div className="app__destination-cards_container_card ">
          <div className="card_info">
            <img src={images.marakkesh} alt="marakkesh" />
            <div className="card_info-trip">
              <p className="desc">Marakkesh</p>
              <p>$5,42K</p>
            </div>
            <div className="card-delay">
              <FaLocationArrow className="location-icon" />{" "}
              <span className="desc">10 Days trip</span>
            </div>
          </div>
        </div>
        <div className="app__destination-cards_container_card">
          <div className="card_info">
            <img src={images.northMorocco} alt="marakkesh" />
            <div className="card_info-trip">
              <p className="desc">The North side</p>
              <p>$3,3K</p>
            </div>
            <div className="card-delay">
              <FaLocationArrow className="location-icon" />{" "}
              <span className="desc">8 Days trip</span>
            </div>
          </div>
        </div>
        <div className="app__destination-cards_container_card">
          <div className="card_info">
            <img src={images.fullMorocco} alt="marakkesh" />
            <div className="card_info-trip">
              <p className="desc">Full Morocco</p>
              <p>$6,62K</p>
            </div>
            <div className="card-delay">
              <FaLocationArrow className="location-icon" />{" "}
              <span className="desc">10 Days trip</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
