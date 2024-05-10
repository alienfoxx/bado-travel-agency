import React from "react";
import images from "../../constant/images";
import "./Hero.css";
import { FaPlayCircle } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="app__slider section-padding">
      <div className="app__slider-info section-padding">
        <p className="title p__poppins">Best Destinations around Morocco</p>
        <h1 className="headtext">
          Travel, enjoy and live a new and full lifeTravel, enjoy and live a new
          and full <span>life</span>
        </h1>
        <div className="app__slider-info_description">
          <p className="p__poppins">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
        </div>
        <div className="app__slider-info_action">
          <button>Find Out More</button>
          <FaPlayCircle className="play-icon" />
          Play Demo
        </div>
      </div>
      <div className="app__slider-image">
        <img src={images.slide} alt="slide-img" />
      </div>
    </div>
  );
};

export default Hero;
