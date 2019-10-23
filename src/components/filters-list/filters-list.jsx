import React, { Component, useState }  from 'react';
import './filters-list-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Zoom from 'react-reveal/Fade';
import FilterLiElement from '../filter-li-element/filter-li-element';

export const FiltersList = ({ sectionID, isCollapsed, test, handleClick }) => {

    return(
        <div className={isCollapsed ? "filters-list-wrap list-collapsed" : "filters-list-wrap list-deployed"}>
            <Zoom opposite collapsed cascade when={!isCollapsed} duration={800}>
                <button onClick={handleClick} className="filters-list-button">Отчистить</button>
                <ul className="ul-list">
                    {test.map(({ id, text }) => (
                        <FilterLiElement 
                            key={`${sectionID} - ${id}`} 
                            id={`${sectionID} - ${id}`}
                            text={text}/>
                    ))}
                </ul>
            </Zoom>
        </div>
    );
}

export const withActiveFilters = (Component) => {
    return class WithActiveFilters extends Component{
        render(){
            return(
                <Component/>
            );
        }
    }
}