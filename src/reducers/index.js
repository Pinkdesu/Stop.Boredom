import { combineReducers } from "redux";
import { allFilters, activeFilters} from './filters';
const rootReducer = combineReducers({ allFilters, activeFilters });

export default rootReducer;
