import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addActiveFilter,
  removeActiveFilter
} from "../../actions/actionCreator";
import "./filter-li-element-style.scss";

const FilterLiElement = ({ id, text, setActiveFiltersCount }) => {
  const dispatch = useDispatch();
  const activeFilters = useSelector(state => state.activeFilters);
  const checked = activeFilters.map(filter => filter.id).includes(id);

  const handleInputChange = () => {
    if (!checked) {
      dispatch(addActiveFilter(id, text));
      setActiveFiltersCount(+1);
    } else {
      dispatch(removeActiveFilter(id));
      setActiveFiltersCount(-1);
    }
  };

  return (
    <li>
      <div className="filter-box-wrap">
        <input
          id={id}
          value={id}
          checked={checked}
          onChange={handleInputChange}
          type="checkbox"
        />
        <label htmlFor={id}>{text}</label>
      </div>
    </li>
  );
};

export default FilterLiElement;
