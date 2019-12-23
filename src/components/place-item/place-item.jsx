import React from "react";
import { Link } from "react-router-dom";
import "./place-item-style.scss";

const Placeitem = ({ id, name, rating, image }) => {
  return (
    <div className="place-item-wrapper">
      <Link to={`/place/${id}`} className="place-item-link">
        <figure>
          <img className="place-item-img" src={image} alt="img" />
        </figure>
        <figcaption>
          <h3>{name}</h3>
        </figcaption>
      </Link>
    </div>
  );
};
export default Placeitem;
