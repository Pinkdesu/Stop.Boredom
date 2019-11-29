import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import makeCarousel from "react-reveal/makeCarousel";
import "./carousel-style.scss";

const Carousel = ({ position, total, handleClick, children }) => (
  <div className="carousel-container">
    <div className="carousel-items">
      <FontAwesomeIcon
        onClick={handleClick}
        data-position={position - 1}
        icon={faAngleLeft}
        className="carousel-arrow arrow-left"
      />

      {children}

      <FontAwesomeIcon
        onClick={handleClick}
        data-position={position + 1}
        icon={faAngleRight}
        className="carousel-arrow arrow-right"
      />
    </div>
    <span className="carousel-dots">
      {Array(...Array(total)).map((val, index) => (
        <span
          className="carousel-dot"
          key={index}
          onClick={handleClick}
          data-position={index}
        >
          {index === position ? "● " : "○ "}
        </span>
      ))}
    </span>
  </div>
);
export default makeCarousel(Carousel);
