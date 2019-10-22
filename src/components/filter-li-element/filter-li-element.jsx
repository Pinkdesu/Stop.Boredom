import React, { useState }  from 'react';
import './filter-li-element-style.css';
import { addFilter, removeFilter } from '../../actions/actionCreator';
import {connect} from 'react-redux';

const FilterLiElement = ({ id, text }) => {
    const [checked, onChange] = useState(false);

    return(
        <li className="filter-li-element-wrap">
            <div className="filter-box-wrap">
                <input id={id} className="fi-hidden-checkbox cursor-pointer" type="checkbox"/>
                <label for={id} className="fi-label-wrap">
                    {text}
                </label>
            </div>
        </li>
    );
}

export default connect(() => {}, { addFilter, removeFilter })(FilterLiElement);