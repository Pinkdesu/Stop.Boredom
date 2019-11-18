import { combineReducers } from "redux";
import { allFilters, activeFilters} from './filters';
import { login } from './authorization';
const rootReducer = combineReducers({ allFilters, activeFilters, login });

export default rootReducer;
