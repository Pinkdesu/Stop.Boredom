import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addActiveFilter,
  removeActiveFilter
} from "../../actions/actionCreator";
import "./filter-li-element-style.scss";

const FilterLiElement = ({ id, sectionID, value }) => {
  const dispatch = useDispatch();
  const activeFilters = useSelector(state => state.activeFilters);
  const checked = activeFilters.map(filter => filter.id).includes(id);

  const handleInputChange = () => {
    if (!checked) {
      dispatch(addActiveFilter(id, sectionID, value));
    } else {
      dispatch(removeActiveFilter(id, sectionID));
    }
  };

  return (
    <li>
      <div className="filter-box-wrapper">
        <input
          id={`${sectionID}-${id}`}
          value={id}
          checked={checked}
          onChange={handleInputChange}
          type="checkbox"
        />
        <label htmlFor={`${sectionID}-${id}`}>{value}</label>
      </div>
    </li>
  );
};

export default React.memo(FilterLiElement);
