import React, { Component, useState }  from 'react';
import './filters-list-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Zoom from 'react-reveal/Fade';

export default ({isCollapsed}) => {
    return(
        <div className={isCollapsed ? "filters-list-wrap list-collapsed" : "filters-list-wrap list-deployed"}>
            <Zoom opposite collapsed={true} when={!isCollapsed} duration={500}>
                <button>Отчистить</button>
                <ul className="ul-list">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </Zoom>
        </div>
    );
}