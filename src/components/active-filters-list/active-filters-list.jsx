import React, { useState }  from 'react';
import ActiveFilterLiElement from '../active-filter-li-element/active-filter-li-element';
import Fade from 'react-reveal/Fade';
import './active-filters-list-style.scss';

export default ({ activeFilters }) => {

    const isDeployed = activeFilters.length != 0;

    return(
        <div className={isDeployed ? "active-filters-wrap" : "active-filters-wrap collapsed"}>
            <span>Активные фильтры</span>
            <ul>
                {activeFilters.map(({ id, text }) => (
                    <ActiveFilterLiElement 
                        key={id} 
                        id={id}
                        text={text}/>
                ))}
            </ul>
        </div>
    );
}