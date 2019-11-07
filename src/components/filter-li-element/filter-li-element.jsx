import React, { useState }  from 'react';
import { connect } from 'react-redux';
import { addActiveFilter , removeActiveFilter } from '../../actions/actionCreator';
import './filter-li-element-style.scss';

const FilterLiElement = ({ id, text, addActiveFilter, removeActiveFilter, activeFilters, setActiveFiltersCount }) => {
    
    const checked = activeFilters.map(filter => filter.id).includes(id);

    const onToggle = (e) => {
        if (!checked) {
            addActiveFilter(id, text);
            setActiveFiltersCount(+1);
        }
        else {
            removeActiveFilter(id);
            setActiveFiltersCount(-1);
        }
    }

    return(
        <li>
            <div className="filter-box-wrap">
                <input id={id} value={id} checked={checked} onChange={onToggle} type="checkbox"/>
                <label htmlFor={id}>
                    {text}
                </label>
            </div>
        </li>
    );
}

const mapStateToProps = (state) => ({
    activeFilters: state.activeFilters
});

export default connect(mapStateToProps, { addActiveFilter, removeActiveFilter })(FilterLiElement);