import React, { useState }  from 'react';
import { connect } from 'react-redux';
import { removeActiveFilter } from '../../actions/actionCreator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './active-filter-li-element-style.scss';
import Zoom from 'react-reveal/Zoom';

const ActiveFilterLiElement = ({ id, text, removeActiveFilter }) => {
    return(
        <Zoom duration={300}>
            <li>
                <div className="active-filter-box-wrap">
                    <span>{text}</span>
                    <FontAwesomeIcon icon={faTimes} onClick={() => removeActiveFilter(id)}/>
                </div>
            </li>
        </Zoom>
    );
}

export default connect(() => ({}), { removeActiveFilter })(ActiveFilterLiElement);