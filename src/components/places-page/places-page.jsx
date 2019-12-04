import React from "react";
import "./places-page-style.scss";
import Carousel from "../carousel/carousel";
import Slide from "react-reveal/Slide";
import CarouselItem from "../carousel-item/carousel-item";

const PlacesPage = () => {
  return (
    <main className="places-wrapper">
      <div className="places-content-wrapper">
        <Carousel defaultWait={4000}>
          <Slide right>
            <CarouselItem />
          </Slide>
          <Slide right>
            <CarouselItem />
          </Slide>
        </Carousel>
      </div>
    </main>
  );
};

export default PlacesPage;
