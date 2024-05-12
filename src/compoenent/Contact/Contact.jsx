import React from "react";
import './Contact.css'
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="app__contact section-padding">
      <div className="contact__wrapper section-padding">
        <h3 className="title-text">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h3>
        <div className="conatct-input">
            <input type="text"  placeholder="Your email" className="desc"/>
            <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
