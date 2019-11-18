import * as types from '../constants';

export const addAllFilters = inputFilters => ({
    type: types.ADD_ALL_FILTERS,
    inputFilters
});

export const addActiveFilter = ( id, text ) => ({
    type: types.ADD_ACTIVE_FILTER,
    id,
    text
});

export const removeActiveFilter = id => ({
    type: types.REMOVE_ACTIVE_FILTER,
    id
});

export const removeActiveFilters = idList => ({
    type: types.REMOVE_ACTIVE_FILTERS,
    idList
});

export const loginRequest = (tokenID, isAuth) => ({
    type: types.LOGIN_REQUEST,
    tokenID,
    isAuth
});
