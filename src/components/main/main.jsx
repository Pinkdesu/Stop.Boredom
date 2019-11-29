import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllFilters } from "../../actions/actionCreator";
import axios from "axios";
import FilterItem from "../filter-item/filter-item";
import QuickFilter from "../quick-filter/quick-filter";
import ActiveFiltersList from "../active-filters-list/active-filters-list";
import AnswerPopup from "../answer-popup/answer-popup";
import "./main-style.scss";

const Main = () => {
  const dispatch = useDispatch();
  const allFilters = useSelector(state => state.allFilters);
  const activeFilters = useSelector(state => state.activeFilters);

  const [isDeployedAnswerWindow, SetDeployedAnswerWindow] = useState(false);

  useEffect(() => {
    if (allFilters.length === 0)
      axios
        .get(
          "https://jsonstorage.net/api/items/2ee5fb72-8f5c-4a4c-9829-edf03a4e2333"
        )
        .then(response => dispatch(addAllFilters(response.data)))
        .catch();
  }, [dispatch, allFilters]);

  const getAnswer = () => {
    SetDeployedAnswerWindow(!isDeployedAnswerWindow);
  };

  return (
    <main className="main-wrapper">
      <div onClick={() => ({})} className="quick-filters">
        <QuickFilter key={"q1"} id={"q1"} text={"Quick1"} />
      </div>

      <div className="main-bar-wrapper">
        <div className="filter-bar">
          {allFilters.map(({ sectionID, sectionText, filters }) => (
            <FilterItem
              key={sectionID}
              sectionID={sectionID}
              sectionText={sectionText}
              filters={filters}
            />
          ))}

          <ActiveFiltersList activeFilters={activeFilters} />
        </div>

        <div className="main-content">
          <div className="circle-box">
            <button onClick={getAnswer}>Circle</button>
          </div>

          <AnswerPopup isDeployedAnswerWindow={isDeployedAnswerWindow} />
        </div>
      </div>
    </main>
  );
};

export default Main;
