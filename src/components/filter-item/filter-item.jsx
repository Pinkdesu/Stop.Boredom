import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import FiltersList from "../filters-list/filters-list";
import "./filter-item-style.scss";

const FilterItem = ({ sectionID, sectionText, filters }) => {
  const [isDeployed, setDeployed] = useState(false);
  const handleClick = () => {
    setDeployed(!isDeployed);
  };

  return (
    <div className="filter-item-bar">
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={isDeployed ? faAngleUp : faAngleDown} />
        <span>{sectionText}</span>
      </button>
      <FiltersList
        sectionID={sectionID}
        isDeployed={isDeployed}
        filters={filters}
      />
    </div>
  );
};

export default FilterItem;
