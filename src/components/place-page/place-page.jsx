import React from "react";
import { useParams } from "react-router-dom";
import "./place-page-style.scss";

const PlacePage = () => {
  const params = useParams();

  return (
    <div className="place-page-wrapper">
      <div className="place-content-wrapper"></div>
    </div>
  );
};
export default PlacePage;
