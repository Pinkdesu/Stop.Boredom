import React, { useState }  from 'react';
import './filter-li-element-style.css';

export default ({ id, text}) => {
    return(
        <li className="filter-li-element-wrap">
            <div className="filter-box-wrap">
                <input id={id} className="fi-hidden-checkbox" type="checkbox"/>
                <label for={id} className="fi-label-wrap">
                    {text}
                </label>
            </div>
        </li>
    );
}