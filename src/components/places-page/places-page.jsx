import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllPlaces } from "../../actions/actionCreator";
import Carousel from "../carousel/carousel";
import Slide from "react-reveal/Slide";
import CarouselItem from "../carousel-item/carousel-item";
import PlacesList from "../places-list/places-list";
import axios from "axios";
import "./places-page-style.scss";

const PlacesPage = () => {
  const dispatch = useDispatch();
  const allPlaces = useSelector(state => state.allPlaces);

  useEffect(() => {
    if (allPlaces.length === 0)
      axios
        .get("http://project/public/places")
        .then(response => dispatch(addAllPlaces(response.data)))
        .catch();
  }, [allPlaces.length, dispatch]);

  return (
    <main className="places-wrapper">
      <div className="places-carousel-wrapper">
        <Carousel defaultWait={4000}>
          <Slide right>
            <CarouselItem />
          </Slide>
          <Slide right>
            <CarouselItem />
          </Slide>
        </Carousel>
      </div>

      <div className="places-content-wrapper">
        {allPlaces.map(({ id, name, description, rating }) => (
          <PlacesList
            key={id}
            id={id}
            name={name}
            description={description}
            rating={rating}
          />
        ))}
      </div>
    </main>
  );
};

export default PlacesPage;
