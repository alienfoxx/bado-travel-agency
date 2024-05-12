import "./Testemonials.css";
import { testemonials } from "../../constant/data";
import { useState } from "react";
import {
  BiLeftArrow,
  BiLeftArrowCircle,
  BiRightArrowCircle,
} from "react-icons/bi";

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testemonials.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testemonials.length - 1 ? 0 : prevSlide + 1
    );
  };

  const testimonial = testemonials[currentSlide];

  return (
    <div className="testimonial-carousel">
      <div className="testimonial">
        <img src={testimonial.image} alt="Testimonial" />
        <h3>{testimonial.name}</h3>
        <p>{testimonial.destination}</p>
        <p>{testimonial.comment}</p>
      </div>
      <div className="carousel-buttons">
        <button onClick={handlePrevSlide}>
          <BiLeftArrowCircle />
        </button>
        <button onClick={handleNextSlide}>
          <BiRightArrowCircle />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
