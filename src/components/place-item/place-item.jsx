import React from "react";
import "./place-item-style.scss";

const Placeitem = ({ image, title }) => {
  return (
    <div className="place-item-wrapper">
      <a href="/place">
        <figure>
          <img
            className="place-item-img"
            src="/images/logo-min.jpg"
            alt="logo"
          />
        </figure>
        <figcaption>
          <h3>Кафе 3</h3>
        </figcaption>
      </a>
    </div>
  );
};
export default Placeitem;
