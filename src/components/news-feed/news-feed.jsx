import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllPlaces } from "../../actions/actionCreator";
import axios from "axios";
import LoadingWindow from "../loading-window/loading-window";
import NewsPost from "../news-post/news-post";
import "./news-feed-style.scss";

const NewsFeed = () => {
  const dispatch = useDispatch();
  const allPlaces = useSelector(state => state.allPlaces);
  const allCategories = useSelector(state => state.allCategories);

  useEffect(() => {
    if (allPlaces.length === 0 && allCategories.length === 0) {
      axios
        .get("http://project/public/places")
        .then(response => dispatch(addAllPlaces(response.data)))
        .catch();
    }
  }, [allCategories, allPlaces, dispatch]);

  return (
    <main className="news-feed-wrapper">
      <section className="news-feed">
        {allPlaces.map(({ id, values }, index) => {
          if (index < 3) {
            return (
              <Suspense
                key={id}
                fallback={
                  <LoadingWindow heigth={values.length > 5 ? 450 : 240} />
                }
              >
                <NewsPost id={id} values={values} />
              </Suspense>
            );
          }
        })}
      </section>
    </main>
  );
};

export default NewsFeed;
