import React, {Component}  from 'react';
import { connect } from 'react-redux';
import './main-style.css';
import FilterItem from '../filter-item/filter-item';
import { FiltersList } from '../filters-list/filters-list';
import QuickFilter from '../quick-filter/quick-filter';
import { removeFilter } from '../../actions/actionCreator';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDeployed: false
        }  
    }

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

        const { isDeployed } = this.state;
        const { activeFilters, removeFilter } = this.props;

        return(
            <main className="main-wrapper">
                <div onClick={() => this.setState(state => ({
                    isDeployed: !state.isDeployed
                }))} className={isDeployed ? "quick-filters quick-fi-deployed" : "quick-filters"}>
                        {test.map(({  sectionID,  sectionText }) => (
                            <QuickFilter
                                    key={sectionID} 
                                    id={sectionID}
                                    text={sectionText} />
                        ))}
                </div>
                
                <div className="main-bar-wrapper">
                    <div className="filter-bar">
                        {test.map(({ sectionID, sectionText }) => (
                            <FilterItem
                                    key={sectionID} 
                                    sectionID={sectionID}
                                    sectionText={sectionText} />
                        ))}
                        

                     <FiltersList
                                        test={activeFilters}
                                        handleClick={() => removeFilter(activeFilters.map(filters => filters.id))}
                                        sectionID={10}
                        />  
                    </div>

                    <div className="main-content">

                    </div>
                </div>
            </main>
        );
    }
}
const mapStateToProps = state => ({
    activeFilters: state.activeFilters
});

export default connect(mapStateToProps, { removeFilter })(Main);