import React  from 'react';
import './quick-filter-style.scss';

const QuickFilter = ({id, text}) => {
    return(
        <div className="quick-flter-item">
            <span className="quick-flter-item-text">{text} - {id}</span>
        </div>
    );
}
export default QuickFilter;