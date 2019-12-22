import * as types from "../constants";
import { load } from "redux-localstorage-simple";

let ALL_PLACES = load(
  load({
    states: ["allPlaces"],
    disableWarnings: true
  })
);

if (!ALL_PLACES || !ALL_PLACES.length) {
  ALL_PLACES = [];
}

export const allPlaces = (state = ALL_PLACES, { type, places }) => {
  switch (type) {
    case types.ADD_ALL_PLACES:
      return [...state, ...places];
    default:
      return state;
  }
};
