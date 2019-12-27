import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllFilters } from "../../actions/actionCreator";
import axios from "axios";
import FilterItem from "../filter-item/filter-item";
import QuickFilter from "../quick-filter/quick-filter";
import ActiveFiltersList from "../active-filters-list/active-filters-list";
import GeneratorWindow from "../generator-window/generator-window";
import "./main-style.scss";

const Main = () => {
  const dispatch = useDispatch();
  const allFilters = useSelector(state => state.allFilters);

  useEffect(() => {
    if (allFilters.length === 0)
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/http://194.147.34.51/project/public/getFilters"
        )
        .then(response => dispatch(addAllFilters(response.data)))
        .catch();
  }, [dispatch, allFilters.length]);

  return (
    <main className="main-wrapper">
      <div onClick={() => ({})} className="quick-filters">
        <QuickFilter key={"q1"} id={"q1"} text={"Quick1"} />
      </div>

      <div className="main-bar-wrapper">
        <div className="filter-bar">
          {allFilters.map(({ id, name, values }) => (
            <FilterItem key={id} id={id} name={name} values={values} />
          ))}

          <ActiveFiltersList />
        </div>

        <GeneratorWindow />
      </div>
    </main>
  );
};

export default Main;
