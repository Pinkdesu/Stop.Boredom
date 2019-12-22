import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeActiveFilters } from "../../actions/actionCreator";
import Fade from "react-reveal/Fade";
import FilterLiElement from "../filter-li-element/filter-li-element";
import "./filters-list-style.scss";

const FiltersList = ({ sectionID, isDeployed, values }) => {
  const dispatch = useDispatch();
  const activeFilters = useSelector(state => state.activeFilters).filter(
    filter => filter.sectionID === sectionID
  );

  const handleClick = () => {
    dispatch(removeActiveFilters(sectionID));
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
          <span>Выбрано: {activeFilters.length}</span>
        </div>
        <ul id={sectionID} className="ul-list">
          {values.map(({ id, value }) => (
            <FilterLiElement
              key={id}
              sectionID={sectionID}
              id={id}
              value={value}
            />
          ))}
        </ul>
      </Fade>
    </div>
  );
};

export default FiltersList;
