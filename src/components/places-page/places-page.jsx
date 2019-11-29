import React from "react";
import "./places-page-style.scss";
import Carousel from "../carousel/carousel";
import Slide from "react-reveal/Slide";

const PlacesPage = () => {
  return (
    <main className="places-wrapper">
      <div className="places-content-wrapper">
        <Carousel>
          <Slide right>
            <div>
              <h1>Slide 1</h1>
              <p>Slide Description</p>
            </div>
          </Slide>
          <Slide right>
            <div>
              <h1>Slide 2</h1>
              <p>Slide Description</p>
            </div>
          </Slide>
          <Slide right>
            <div>
              <h1>Slide 3</h1>
              <p>Slide Description</p>
            </div>
          </Slide>
        </Carousel>
      </div>
    </main>
  );
};

export default PlacesPage;
