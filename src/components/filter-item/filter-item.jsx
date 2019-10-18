import React, { Component, useState }  from 'react';
import './filter-item-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import FiltersList from '../filters-list/filters-list';

export default () => {
    const [isCollapsed, handleClick] = useState(true);
    return(
        <div className="filter-item-bar">
            <button className="filter-item-button" onClick={() => handleClick(!isCollapsed)}>
                <FontAwesomeIcon icon={isCollapsed ? faAngleDown : faAngleUp } className="filter-item-icon"/>
                <span className="filter-item-text">Фильтр 1</span>
            </button>
            <FiltersList isCollapsed={isCollapsed}/>
        </div>
    );
}