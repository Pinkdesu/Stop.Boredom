import React, { Component, useState }  from 'react';
import './quick-filter--style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const QuickFilter = ({id, text}) => {
    return(
        <div className="quick-flter-item">
            <span className="quick-flter-item-text">{text}</span>
            <FontAwesomeIcon className="quick-flter-item-icon" icon={faTimes}/>
        </div>
    );
}
export default QuickFilter;