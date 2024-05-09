import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import images from "../../constant/images";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [toggleMenu, setToggleMEnu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} />
      </div>
      <ul className="app__navbar-links">
        <li className="p__poppins">
          <a href="#destination">Destination</a>
        </li>
        <li className="p__poppins">
          <a href="#hotels">Hotels</a>
        </li>
        <li className="p__poppins">
          <a href="#flights">Flights</a>
        </li>
        <li className="p__poppins">
          <a href="#bookings">Bookings</a>
        </li>
        <li className="p__poppins">
          <a href="#login">login</a>
        </li>
        <li className="p__poppins">
          <a href="#singup" className="singup">
            Sing-up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
