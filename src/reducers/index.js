import { combineReducers } from "redux";
import { allFilters, activeFilters } from "./filters";
import { allPlaces } from "./places";
import { allCategories } from "./categories";
import { login } from "./authorization";

const rootReducer = combineReducers({
  allFilters,
  activeFilters,
  login,
  allPlaces,
  allCategories
});

export default rootReducer;
