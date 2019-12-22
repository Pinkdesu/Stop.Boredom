import { combineReducers } from "redux";
import { allFilters, activeFilters } from "./filters";
import { allPlaces } from "./places";
import { login } from "./authorization";
const rootReducer = combineReducers({
  allFilters,
  activeFilters,
  login,
  allPlaces
});

export default rootReducer;
