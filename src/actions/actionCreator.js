import * as types from "../constants";

export const addAllFilters = inputFilters => ({
  type: types.ADD_ALL_FILTERS,
  inputFilters
});

export const addActiveFilter = (id, sectionID, text) => ({
  type: types.ADD_ACTIVE_FILTER,
  id,
  sectionID,
  text
});

export const removeActiveFilter = (id, sectionID) => ({
  type: types.REMOVE_ACTIVE_FILTER,
  id,
  sectionID
});

export const removeActiveFilters = sectionID => ({
  type: types.REMOVE_ACTIVE_FILTERS,
  sectionID
});

export const addAllPlaces = places => ({
  type: types.ADD_ALL_PLACES,
  places
});

export const loginRequest = (tokenID, isAuth) => ({
  type: types.LOGIN_REQUEST,
  tokenID,
  isAuth
});
