import React, { useState } from "react";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./places-list-style.scss";

const PlacesList = () => {
  const [isDeployed, setDeployed] = useState(false);

  const handleButtonClick = () => {
    setDeployed(!isDeployed);
  };

  return (
    <div className="places-list-wrapper">
      <h1>Кафе</h1>
      <div className="places-list-main"></div>
      <div classNmae="places-list-footer">
        <button onClick={handleButtonClick}>
          <span>{isDeployed ? "Свернуть" : "Развернуть"}</span>
          <FontAwesomeIcon icon={isDeployed ? faAngleUp : faAngleDown} />
        </button>
      </div>
    </div>
  );
};

export default PlacesList;
