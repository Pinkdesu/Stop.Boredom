import React, { Component, useState }  from 'react';
import './filters-list-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default ({isCollapsed}) => {
    return(
        <div className={isCollapsed ? "list-collapsed" : "list-deployed"}>
                
        </div>
    );
}