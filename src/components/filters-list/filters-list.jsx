import React, { Component, useState }  from 'react';
import Zoom from 'react-reveal/Fade';
import FilterLiElement from '../filter-li-element/filter-li-element';
import './filters-list-style.scss';

export const FiltersList = ({ sectionID, isCollapsed, test, handleClick }) => {

    return(
        <div className={isCollapsed ? "filters-list-wrap" : "filters-list-wrap list-deployed"}>
            <button onClick={handleClick}>Отчистить</button>
            <Zoom opposite collapsed when={!isCollapsed} duration={800}>
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