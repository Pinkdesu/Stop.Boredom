import React from "react";
import { useSelector } from "react-redux";
import ActiveFilterLiElement from "../active-filter-li-element/active-filter-li-element";
import "./active-filters-list-style.scss";

const ActiveFiltersList = () => {
  const activeFilters = useSelector(state => state.activeFilters);
  const isDeployed = activeFilters.length !== 0;

  return (
    <div
      className={
        isDeployed ? "active-filters-wrap" : "active-filters-wrap collapsed"
      }
    >
      <span>Активные фильтры</span>
      <ul>
        {activeFilters.map(({ id, sectionID, text }) => (
          <ActiveFilterLiElement
            key={id}
            id={id}
            sectionID={sectionID}
            text={text}
          />
        ))}
      </ul>
    </div>
  );
};
export default ActiveFiltersList;
