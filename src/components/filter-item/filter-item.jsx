import React, { useState }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import FiltersList from '../filters-list/filters-list';
import './filter-item-style.scss';

export default ({sectionID, sectionText}) => {
    const [isDeployed, handleClick] = useState(false);
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
            <button className="cursor-pointer" onClick={() => handleClick(!isDeployed)}>
                <FontAwesomeIcon icon={isDeployed ? faAngleUp : faAngleDown } className="filter-item-icon"/>
                <span>{sectionText}</span>
            </button>
            <FiltersList sectionID={sectionID} 
                         isDeployed={isDeployed}
                         test={test}/>
        </div>
    );
}