import React, { useState }  from 'react';
import './filter-li-element-style.css';
import { connect } from 'react-redux';
import { addFilter , removeFilter } from '../../actions/actionCreator';

const FilterLiElement = ({ id, text, addFilter, removeFilter }) => {
    const [checked, onChange] = useState(false);

    const onToggle = (e) => {
        onChange(!checked);
        if (!checked) {
            addFilter(id, text);
        }
        else {
            removeFilter(id);
        }
    }

    return(
        <li className="filter-li-element-wrap">
            <div className="filter-box-wrap">
                <input id={id} checked={checked} onChange={onToggle} className="fi-hidden-checkbox cursor-pointer" type="checkbox"/>
                <label htmlFor={id} className="fi-label-wrap">
                    {text}
                </label>
            </div>
        </li>
    );
}

export default connect(() => ({}), { addFilter, removeFilter })(FilterLiElement);