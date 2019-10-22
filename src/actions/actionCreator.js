import { ADD_FILTER, REMOVE_FILTER } from '../constants';

export const addFilter = ( id, text ) => ({
    type: ADD_FILTER,
    id,
    text
});

export const removeFilter = id =>({
    type: REMOVE_FILTER,
    id
});