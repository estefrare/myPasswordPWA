import initialState from './initialState';
import { Reducer } from 'redux';
import { AuthState, AuthActionConst } from './types';

const reducer: Reducer<AuthState, any> = (state = initialState, action): AuthState => {
  switch (action.type) {
    case AuthActionConst.LOGIN_FIREBASE_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: initialState.error
      }
    case AuthActionConst.LOGIN_FIREBASE_FULFILLED:
      return {
        ...state,
        isFetching: false,
      }
    case AuthActionConst.LOGIN_FIREBASE_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: {
          message: action.payload.message,
          statusCode: action.payload.code,
        },
      };
    default:
      return state
  }
}

export default reducer