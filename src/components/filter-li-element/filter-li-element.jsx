import React, { useState }  from 'react';
import { connect } from 'react-redux';
import { addFilter , removeFilter } from '../../actions/actionCreator';
import './filter-li-element-style.scss';

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
        <li>
            <div className="filter-box-wrap">
                <input id={id} value={id} checked={checked} onChange={onToggle} type="checkbox"/>
                <label htmlFor={id}>
                    {text}
                </label>
            </div>
        </li>
    );
}

export default connect(() => ({}), { addFilter, removeFilter })(FilterLiElement);