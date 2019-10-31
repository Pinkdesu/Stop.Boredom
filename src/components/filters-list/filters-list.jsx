import React, { Component, useState }  from 'react';
import { connect } from 'react-redux';
import { removeActiveFilters } from '../../actions/actionCreator';
import FilterLiElement from '../filter-li-element/filter-li-element';
import './filters-list-style.scss';

const FiltersList = ({ sectionID, isDeployed, filters, removeActiveFilters }) => {

    return(
        <div className={isDeployed ? "filters-list-wrap" : "filters-list-wrap collapsed"}>
            <button onClick={() => removeActiveFilters(filters.map(filter => filter.id))}>Очистить</button>
            <ul className="ul-list">
                {filters.map(({ id, text }) => (
                    <FilterLiElement 
                        key={id} 
                        id={id}
                        text={text}/>
                ))}
            </ul>
        </div>
    );
}
export default connect(() => ({}), { removeActiveFilters })(FiltersList);