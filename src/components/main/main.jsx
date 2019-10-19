import React, {Component}  from 'react';
import './main-style.css';
import FilterItem from '../filter-item/filter-item';

class Main extends Component {
    render() {

        const test = [
            {
                sectionID: '1',
                sectionText: 'Раздел 1'
            },
    
            {
                sectionID: '2',
                sectionText: 'Раздел 2'
            },
    
            {
                sectionID: '3',
                sectionText: 'Раздел 3'
            },
    
            {
                sectionID: '4',
                sectionText: 'Раздел 4'
            },
    
            {
                sectionID: '5',
                sectionText: 'Раздел 5'
            },
        ];

        return(
            <main className="main-wrapper">

                <div className="filter-bar">
                    {test.map(({ sectionID, sectionText }) => (
                        <FilterItem
                                key={sectionID} 
                                sectionID={sectionID}
                                sectionText={sectionText} />
                    ))}
                    
                    <div className="selected-filters-bar">
            
                    </div>
                </div>

                <div className="main-content">

                </div>
            </main>
        );
    }
}
export default Main;