import React, {Component} from 'react';
import { connect } from 'react-redux';
import { removeActiveFilters } from '../../actions/actionCreator';
import FilterLiElement from '../filter-li-element/filter-li-element';
import './filters-list-style.scss';

// const FiltersList = ({ sectionID, isDeployed, filters, removeActiveFilters, activeFilters }) => {

//     const [count, SetCount] = useState(0);

//     const getActiveFiltersCount = (value) => {
//         SetCount(count + value);
//         //  let count = activeFilters.reduce( (sum, current) =>  {
//         //      let filtersIDs = filters.map(filter => filter.id);
//         //      return filtersIDs.includes(current.id) ? ++sum : sum;
//         // }, 0);

//         // let count = 0;
//         // if(document.getElementById(sectionID))
//         // {
//         //     count = filters.reduce((sum, current) => {
//         //         return document.getElementById(current.id).checked ? ++sum : sum;
//         //     }, 0)
//         // }
//         // return count;
//     }

//     //console.log("render"); слишком много переренд. компонента, переделать
//     return(
//         <div className={isDeployed ? "filters-list-wrap" : "filters-list-wrap collapsed"}>
//             <div className="filters-list-header">
//                 <button onClick={() => removeActiveFilters(filters.map(filter => filter.id))}>Очистить</button>
//                 <span>Выбрано: {count}</span>
//             </div>
//             <ul id={sectionID} className="ul-list">
//                 {filters.map(({ id, text }) => (
//                     <FilterLiElement 
//                         key={id} 
//                         id={id}
//                         text={text}
//                         getActiveFiltersCount={() => getActiveFiltersCount()}/>
//                 ))}
//             </ul>
//         </div>
//     );
// }
class FiltersList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        
        this.setActiveFiltersCount = this.setActiveFiltersCount.bind(this);
    }

    setActiveFiltersCount = (value) => {
        this.setState(state => ({
            count: state.count + value
        }));
    }

    render(){
        const { sectionID, isDeployed, filters, removeActiveFilters } = this.props;
        const { count } = this.state;
        return(
            <div className={isDeployed ? "filters-list-wrap" : "filters-list-wrap collapsed"}>
                <div className="filters-list-header">
                    <button onClick={() => removeActiveFilters(filters.map(filter => filter.id))}>Очистить</button>
                    <span>Выбрано: {count}</span>
                </div>
                <ul id={sectionID} className="ul-list">
                    {filters.map(({ id, text }) => (
                        <FilterLiElement 
                            key={id} 
                            id={id}
                            text={text}
                            setActiveFiltersCount={this.setActiveFiltersCount}/>
                    ))}
                </ul>
            </div>
        );
    }
}

export default connect(() => ({}), { removeActiveFilters })(FiltersList);