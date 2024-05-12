import React from "react";
import images from "../../constant/images";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="app__footer section-padding">
      <div className="footer-wrapper section-padding">
        <div className="footer-box">
          <img src={images.logo} alt="log" />
          <p className="desc">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div className="footer-box">
          <p className="title-text">Company</p>
          <ul>
            <li className="desc">About</li>
            <li className="desc">Careers</li>
            <li className="desc">Mobile</li>
          </ul>
        </div>
        <div className="footer-box">
          <p className="title-text">Contact</p>
          <ul>
            <li className="desc">Help/FAQ</li>
            <li className="desc">Press</li>
            <li className="desc">Affilates</li>
          </ul>
        </div>
        <div className="footer-box">
          <p className="title-text">More</p>
          <ul>
            <li className="desc">Airlinesfees</li>
            <li className="desc">Airline</li>
            <li className="desc">Low Fare tips</li>
          </ul>
        </div>
        <div className="contact-links">
          <div className="contact-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
          </div>
          <p className="title-text">Discover our social</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
