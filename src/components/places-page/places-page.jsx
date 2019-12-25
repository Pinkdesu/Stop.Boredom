import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllPlaces, addAllCategories } from "../../actions/actionCreator";
import Carousel from "../carousel/carousel";
import Slide from "react-reveal/Slide";
import CarouselItem from "../carousel-item/carousel-item";
//import PlacesList from "../places-list/places-list";
import axios from "axios";
import "./places-page-style.scss";
import LoadingWindow from "../loading-window/loading-window";

const PlacesList = React.lazy(() => import("../places-list/places-list"));

const PlacesPage = () => {
  const dispatch = useDispatch();
  const allPlaces = useSelector(state => state.allPlaces);
  const allCategories = useSelector(state => state.allCategories);

  useEffect(() => {
    if (allPlaces.length === 0 && allCategories.length === 0) {
      axios
        .get("http://project/public/places")
        .then(response => dispatch(addAllPlaces(response.data)))
        .catch();
      axios
        .get("http://project/public/getCategories")
        .then(response => dispatch(addAllCategories(response.data)))
        .catch();
    }
  }, [allCategories, allPlaces, dispatch]);

  const carouselItems = (() => {
    let result = [];
    let arrCount = Math.ceil(allCategories.length / 4);

    for (let i = 1; i <= arrCount; i++) {
      if (i !== arrCount) result.push(allCategories.slice((i - 1) * 4, 4 * i));
      else result.push(allCategories.slice((i - 1) * 4));
    }

    return result;
  })();

  return (
    <main className="places-wrapper">
      <div className="places-carousel-wrapper">
        <Carousel defaultWait={4000}>
          {carouselItems.map((item, index) => (
            <Slide key={index} right>
              <CarouselItem categories={item} />
            </Slide>
          ))}
        </Carousel>
      </div>

      <div className="places-content-wrapper">
        {allPlaces.map(({ id, name, values }) => (
          <Suspense
            key={id}
            fallback={<LoadingWindow heigth={values.length > 5 ? 450 : 240} />}
          >
            <PlacesList name={name} values={values} />
          </Suspense>
        ))}
      </div>
    </main>
  );
};

export default PlacesPage;
