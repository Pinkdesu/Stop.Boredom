import React, { Component, useState }  from 'react';
import './filter-item-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default () => {
    const [isCollapsed, handleClick] = useState(true);
    console.log(isCollapsed);
    return(
        <div className="filter-item-bar" onClick={() => handleClick(!isCollapsed)}>
            <button className="filter-item-button">
                <FontAwesomeIcon icon={isCollapsed ? faAngleDown : faAngleUp } className="filter-item-icon"/>
                <span className="filter-item-text">Фильтр 1</span>
            </button>
            <ul className={isCollapsed ? "collapsed-fi" : "deployed-fi"}>
            </ul>
        </div>
    );
}