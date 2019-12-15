import React from "react";
import Carousel from "../carousel/carousel";
import Slide from "react-reveal/Slide";
import CarouselItem from "../carousel-item/carousel-item";
import "./places-page-style.scss";
import PlacesList from "../places-list/places-list";

const PlacesPage = () => {
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
        <PlacesList />
      </div>
    </main>
  );
};

export default PlacesPage;
