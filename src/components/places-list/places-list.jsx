import React, { useState } from "react";
import "./places-list-style.scss";

const PlacesList = () => {
  const [isDeployed, SetDeployed] = useState(false);

  return (
    <div className="places-list-wrapper">
      <h2>Кафе</h2>
    </div>
  );
};

export default PlacesList;
