import React, { useState } from "react";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Placeitem from "../place-item/place-item";
import "./places-list-style.scss";

const PlacesList = () => {
  const [isDeployed, setDeployed] = useState(false);

  const handleButtonClick = () => {
    setDeployed(!isDeployed);
  };

  return (
    <div className="places-list-wrapper">
      <h1>Кафе</h1>

      <div className="places-list-main">
        <Placeitem />
        <Placeitem />
        <Placeitem />
        <Placeitem />
        <Placeitem />
        <Placeitem />
        <Placeitem />
      </div>

      <div className="places-list-footer">
        <span onClick={handleButtonClick}>
          <FontAwesomeIcon icon={isDeployed ? faAngleUp : faAngleDown} />
          <span className="places-list-footer-text">
            {isDeployed ? "Свернуть" : "Развернуть"}
          </span>
        </span>
      </div>
    </div>
  );
};

export default PlacesList;
