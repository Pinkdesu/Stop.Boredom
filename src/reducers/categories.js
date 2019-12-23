import * as types from "../constants";
import { load } from "redux-localstorage-simple";

let ALL_CATEGORIES = load(
  load({
    states: ["allCategories"],
    disableWarnings: true
  })
);

if (!ALL_CATEGORIES || !ALL_CATEGORIES.length) {
  ALL_CATEGORIES = [];
}

export const allCategories = (state = ALL_CATEGORIES, { type, categories }) => {
  switch (type) {
    case types.ADD_ALL_CATEGORIES:
      return [...state, ...categories];
    default:
      return state;
  }
};
