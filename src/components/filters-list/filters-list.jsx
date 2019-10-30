import React, { Component, useState }  from 'react';
import { connect } from 'react-redux';
import { addFilter , removeFilter } from '../../actions/actionCreator';
import FilterLiElement from '../filter-li-element/filter-li-element';
import './filters-list-style.scss';

const FiltersList = ({ sectionID, isDeployed, test, activeFilters , removeFilter}) => {

    const handleClick = () => {
        
    }

    return(
        <div className={isDeployed ? "filters-list-wrap" : "filters-list-wrap collapsed"}>
            <button onClick={handleClick}>Отчистить</button>
            <ul className="ul-list">
                {test.map(({ id, text }) => (
                    <FilterLiElement 
                        key={`${sectionID} - ${id}`} 
                        id={`${sectionID} - ${id}`}
                        text={text}/>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => ({
    activeFilters: state.activeFilters
});

export default connect(mapStateToProps, { removeFilter })(FiltersList);