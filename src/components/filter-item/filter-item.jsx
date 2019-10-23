import React, { useState }  from 'react';
import './filter-item-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FiltersList } from '../filters-list/filters-list';

export default ({sectionID, sectionText}) => {
    const [isCollapsed, handleClick] = useState(true);
    const test = [
        {
            id: '1',
            text: 'Filter 1'
        },

        {
            id: '2',
            text: 'Filter 2'
        },

        {
            id: '3',
            text: 'Filter 3'
        },

        {
            id: '4',
            text: 'Filter 4'
        },

        {
            id: '5',
            text: 'Filter 5'
        },
        {
            id: '6',
            text: 'Filter 6'
        },
    ];
    return(
        <div className="filter-item-bar">
            <button className="filter-item-button cursor-pointer" onClick={() => handleClick(!isCollapsed)}>
                <FontAwesomeIcon icon={isCollapsed ? faAngleDown : faAngleUp } className="filter-item-icon"/>
                <span className="filter-item-text">{sectionText}</span>
            </button>
            <FiltersList sectionID={sectionID} 
                         isCollapsed={isCollapsed}
                         test={test}
                         handleClick={() => {}}/>
        </div>
    );
}