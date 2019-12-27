import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./place-page-style.scss";

const PlacePage = () => {
  const params = useParams();
  const [dataPlace, setDataPlace] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://194.147.34.51/project/public/place/${params.id}`
      )
      .then(response => setDataPlace(response.data))
      .catch();
  }, [params]);

  return (
    <main className="place-page-wrapper">
      <div className="place-content-wrapper">
        <h1>{dataPlace.name}</h1>
        <div className="place-content-description">
          <div className="place-content-image">
            <figure>
              <img
                src={`http://194.147.34.51/project/public/${dataPlace.image}`}
                alt="img"
              />
            </figure>
            <figcaption>{dataPlace.contacts}</figcaption>
          </div>
          <p>{dataPlace.description}</p>
        </div>
      </div>
    </main>
  );
};
export default PlacePage;
