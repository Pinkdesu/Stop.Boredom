import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCircle as farCircle
} from "@fortawesome/free-solid-svg-icons";
import { faCircle as fasCircle } from "@fortawesome/free-regular-svg-icons";
import makeCarousel from "react-reveal/makeCarousel";
import "./carousel-style.scss";

const Carousel = ({ position, total, handleClick, children }) => {
  return (
    <div className="carousel-container">
      <div className="carousel-panel">
        <div className="carousel-arrow-container">
          <FontAwesomeIcon
            onClick={handleClick}
            data-position={position - 1}
            icon={faAngleLeft}
            className="carousel-arrow"
          />
        </div>

        <div className="carousel-items">{children}</div>

        <div className="carousel-arrow-container">
          <FontAwesomeIcon
            onClick={handleClick}
            data-position={position + 1}
            icon={faAngleRight}
            className="carousel-arrow"
          />
        </div>
      </div>

      <div className="carousel-dots">
        {[...Array(total)].map((val, index) => (
          <span
            className="carousel-dot"
            key={index}
            onClick={handleClick}
            data-position={index}
          >
            <FontAwesomeIcon
              icon={index === position ? farCircle : fasCircle}
            />
          </span>
        ))}
      </div>
    </div>
  );
};
export default makeCarousel(Carousel);
