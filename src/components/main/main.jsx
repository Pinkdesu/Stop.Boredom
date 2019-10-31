import React, {Component}  from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import FilterItem from '../filter-item/filter-item';
import QuickFilter from '../quick-filter/quick-filter';
import ActiveFiltersList from '../active-filters-list/active-filters-list';
import { addAllFilters } from '../../actions/actionCreator';
import './main-style.scss';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDeployed: false
        }  
    }

    componentDidMount = () => {
        const { addAllFilters } = this.props; 
        axios.get("https://jsonstorage.net/api/items/2ee5fb72-8f5c-4a4c-9829-edf03a4e2333")
             .then(response => addAllFilters(response.data))
             .catch();
    }

    render() {

        const { isDeployed } = this.state;
        const { allFilters, activeFilters } = this.props;

        return(
            <main className="main-wrapper">
                <div onClick={() => this.setState(state => ({
                    isDeployed: !state.isDeployed
                }))} className={isDeployed ? "quick-filters quick-fi-deployed" : "quick-filters"}>
                        <QuickFilter
                                key={"q1"} 
                                id={"q1"}
                                text={"Quick1"} />
                </div>
                
                <div className="main-bar-wrapper">
                    <div className="filter-bar">
                        {allFilters.map(({ sectionID, sectionText, filters }) => (
                            <FilterItem
                                    key={sectionID} 
                                    sectionID={sectionID}
                                    sectionText={sectionText} 
                                    filters={filters}/>
                        ))}  

                        <ActiveFiltersList activeFilters={activeFilters}/>
                    </div>

                    <div className="main-content">

                    </div>
                </div>
            </main>
        );
    }
}
const mapStateToProps = state => ({
    allFilters: state.allFilters,
    activeFilters: state.activeFilters
});

export default connect(mapStateToProps, { addAllFilters })(Main);