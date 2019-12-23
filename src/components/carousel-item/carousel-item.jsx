import React from "react";
import { Link } from "react-router-dom";
import { CATEGORY_ICONS } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./carousel-item-style.scss";

const CarouselItem = ({ categories }) => {
  return (
    <div className="carousel-item">
      {CATEGORY_ICONS.map(({ id, name, icon }) => (
        <Link to={`/places/${id}`} key={id}>
          <FontAwesomeIcon icon={icon} size="2x" />
          <h1>{name}</h1>
        </Link>
      ))}
    </div>
  );
};
export default CarouselItem;
