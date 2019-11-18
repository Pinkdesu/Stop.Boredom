import * as types from '../constants';

export const login = (state = {tokenID: '', isAuth: false}, { type, tokenID, isAuth }) => {
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state, 
          tokenID,
          isAuth 
      };
    default:
      return state;
  }
}