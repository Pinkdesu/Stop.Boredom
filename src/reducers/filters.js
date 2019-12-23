import * as types from "../constants";
import { load } from "redux-localstorage-simple";

let ACTIVE_FILTERS = load(
  load({
    states: ["allFilters"],
    disableWarnings: true
  })
);

if (!ACTIVE_FILTERS || !ACTIVE_FILTERS.length) {
  ACTIVE_FILTERS = [];
}

export const activeFilters = (state = ACTIVE_FILTERS, action) => {
  switch (action.type) {
    case types.ADD_ACTIVE_FILTER:
      return [
        ...state,
        {
          id: action.id,
          sectionID: action.sectionID,
          text: action.text
        }
      ];
    case types.REMOVE_ACTIVE_FILTER:
      return [...state].filter(filter => filter.id !== action.id);
    case types.REMOVE_ACTIVE_FILTERS:
      return [...state].filter(filter => filter.sectionID !== action.sectionID);
    default:
      return state;
  }
};

export const allFilters = (state = [], { type, inputFilters }) => {
  switch (type) {
    case types.ADD_ALL_FILTERS:
      return [...state, ...inputFilters];
    default:
      return state;
  }
};
