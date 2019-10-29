import React, { useState }  from 'react';
import ActiveFilterLiElement from '../active-filter-li-element/active-filter-li-element'
import './active-filters-list-style.scss';

export default ({ test }) => {
    return(
        <div className="active-filters-wrap">
            <span>Активные фильтры</span>
            <ul>
                {test.map(({ id, text }) => (
                    <ActiveFilterLiElement 
                        key={id} 
                        id={id}
                        text={text}/>
                ))}
            </ul>
        </div>
    );
}