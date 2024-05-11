import React from "react";
import images from "../../constant/images";
import {
  FaCanadianMapleLeaf,
  FaLocationArrow,
  FaMap,
  FaMapMarked,
  FaRegHeart,
} from "react-icons/fa";
import { MdOutlineEmojiPeople, MdOutlinePayment } from "react-icons/md";
import { IoAirplaneSharp } from "react-icons/io5";
import "./Booking.css";
import { PiPlantFill } from "react-icons/pi";

const Booking = () => {
  return (
    <div className="app__booking section-padding">
      <div className="app__booking-info section-padding">
        <p className="desc">Easy and Fast</p>
        <h1 className="headtext">Book Your Next Trip In 3 Easy Steps</h1>

        <div className="booking__box">
          <FaMapMarked className="booking-icons" />
          <div className="booking__box-info">
            <p className="title-text">Choose Destination</p>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tortor tempus.{" "}
            </p>
          </div>
        </div>

        <div className="booking__box">
          <MdOutlinePayment className="booking-icons" />
          <div className="booking__box-info">
            <p className="title-text">Make Payment</p>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tortor tempus.
            </p>
          </div>
        </div>

        <div className="booking__box">
          <IoAirplaneSharp className="booking-icons" />
          <div className="booking__box-info">
            <p className="title-text">Reach Airport on Selected Date</p>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tortor tempus.
            </p>
          </div>
        </div>
      </div>
      <div className="app__booking-trip-info section-padding">
        <div className="bookin-trip-info__card section-padding">
          <div className="card-image">
            <img src={images.rabat} alt="" />
          </div>
          <p className="title-text">Trip To Rabat</p>
          <div className="card-info">
            <p className="desc">14-29 June</p> <hr />{" "}
            <p className="desc"> by Ali El Slimani</p>
          </div>
          <div className="card-icons-container">
            <PiPlantFill className="card-icon" />
            <FaMap className="card-icon" />
            <FaLocationArrow className="card-icon" />
          </div>
          <div className="card-stat">
            <p className="title-text">
              <span>
                <MdOutlineEmojiPeople className="card-stat-icon" />
              </span>{" "}
              24 people going
            </p>
            <span>
              <FaRegHeart />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
