import React, { Component, useState }  from 'react';
import './quick-filter-style.css';

const QuickFilter = ({id, text}) => {
    return(
        <div className="quick-flter-item">
            <span className="quick-flter-item-text">{text}</span>
        </div>
    );
}
export default QuickFilter;