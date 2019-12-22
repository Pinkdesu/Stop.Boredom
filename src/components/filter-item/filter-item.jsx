import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import FiltersList from "../filters-list/filters-list";
import "./filter-item-style.scss";

const FilterItem = ({ id, name, values }) => {
  const [isDeployed, setDeployed] = useState(false);
  const handleClick = () => {
    setDeployed(!isDeployed);
  };

  return (
    <div className="filter-item-bar">
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={isDeployed ? faAngleUp : faAngleDown} />
        <span>{name}</span>
      </button>
      <FiltersList sectionID={id} isDeployed={isDeployed} values={values} />
    </div>
  );
};

export default FilterItem;
