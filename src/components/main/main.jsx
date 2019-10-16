import React, {Component}  from 'react';
import './main-style.css';
import FilterItem from '../filter-item/filter-item';

class Main extends Component {
    render() {
        return(
            <main className="main-wrapper">

                <div className="filter-bar">
                    <FilterItem />
                    <FilterItem />
                    <FilterItem />
                    <FilterItem />
                </div>

                <div className="main-content">

                </div>
            </main>
        );
    }
}
export default Main;