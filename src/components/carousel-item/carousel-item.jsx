import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./carousel-item-style.scss";

const CarouselItem = ({ categories }) => {
  return (
    <div className="carousel-item">
      {categories.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
          <p>{id}</p>
        </div>
      ))}
    </div>
  );
};
export default CarouselItem;
