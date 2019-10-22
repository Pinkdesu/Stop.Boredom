import React, { Component, useState }  from 'react';
import './filters-list-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Zoom from 'react-reveal/Fade';
import FilterLiElement from '../filter-li-element/filter-li-element';

export default ({ sectionID, isCollapsed }) => {
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
        <div className={isCollapsed ? "filters-list-wrap list-collapsed" : "filters-list-wrap list-deployed"}>
            <Zoom opposite collapsed cascade when={!isCollapsed} duration={800}>
                <button>Отчистить</button>
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