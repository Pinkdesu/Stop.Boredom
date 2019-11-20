import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import FiltersList from "../filters-list/filters-list";
import "./filter-item-style.scss";

export default ({ sectionID, sectionText, filters }) => {
  const [isDeployed, handleClick] = useState(false);
  return (
    <div className="filter-item-bar">
      <button
        className="cursor-pointer"
        onClick={() => handleClick(!isDeployed)}
      >
        <FontAwesomeIcon
          icon={isDeployed ? faAngleUp : faAngleDown}
          className="filter-item-icon"
        />
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
