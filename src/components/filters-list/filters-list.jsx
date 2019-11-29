import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeActiveFilters } from "../../actions/actionCreator";
import Fade from "react-reveal/Fade";
import FilterLiElement from "../filter-li-element/filter-li-element";
import "./filters-list-style.scss";

const FiltersList = ({ sectionID, isDeployed, filters }) => {
  const dispatch = useDispatch();
  const [count, SetCount] = useState(0);

  const setActiveFiltersCount = value => {
    SetCount(count + value);
  };

  const handleClick = () => {
    dispatch(removeActiveFilters(filters.map(filter => filter.id)));
  };

  return (
    <div
      className={
        isDeployed ? "filters-list-wrap" : "filters-list-wrap collapsed"
      }
    >
      <Fade when={isDeployed} delay={100} duration={300}>
        <div className="filters-list-header">
          <button onClick={handleClick}>Очистить</button>
          <span>Выбрано: {count}</span>
        </div>
        <ul id={sectionID} className="ul-list">
          {filters.map(({ id, text }) => (
            <FilterLiElement
              key={id}
              id={id}
              text={text}
              setActiveFiltersCount={value => setActiveFiltersCount(value)}
            />
          ))}
        </ul>
      </Fade>
    </div>
  );
};

export default FiltersList;
