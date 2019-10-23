import { ADD_FILTER, REMOVE_FILTER } from '../constants';
import {load} from 'redux-localstorage-simple';

let ACTIVE_FILTERS = load({namespace: 'active-filters'});
if (!ACTIVE_FILTERS || !ACTIVE_FILTERS.filters || !ACTIVE_FILTERS.filters.length){
  ACTIVE_FILTERS = {
    filters: [],
  }
}

const activeFilters = (state = ACTIVE_FILTERS.filters, {type, id, text}) => {
  switch (type) {
    case ADD_FILTER:
      return [
        ...state, {
          id,
          text
        }
      ];
    case REMOVE_FILTER:
      return [...state].filter(filters => !id.includes(filters.id));
    // case COMPLETED_TASK:
    //   return [...state].map(task => {
    //     if(task.id === id) {
    //       task.isCompleted = !task.isCompleted;
    //     }
    //     return task;
    //   });
    default:
      return state;
  }
}
export default activeFilters;
