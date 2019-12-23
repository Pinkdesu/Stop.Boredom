import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./place-page-style.scss";

const PlacePage = () => {
  const params = useParams();
  console.log(params);
  const [{ name }] = useSelector(state => state.allPlaces)
    .filter(category => +category.id === +params.categoryID)
    .values.filter(place => +place.id === +params.id);

  return (
    <main className="place-page-wrapper">
      <div className="place-content-wrapper">
        <h1>{name}</h1>
      </div>
    </main>
  );
};
export default PlacePage;
