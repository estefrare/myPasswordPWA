import initialState from './initialState';
import { Reducer } from 'redux';
import { AuthState, AuthActionConst } from './types';

const reducer: Reducer<AuthState, any> = (state = initialState, action): AuthState => {
  switch (action.type) {
    case AuthActionConst.LOGOUT_FETCHING:
    case AuthActionConst.LOGIN_FIREBASE_FETCHING:
      return {
        ...initialState,
        isFetching: true,
      }
    case AuthActionConst.LOGIN_FIREBASE_FULFILLED:
      return {
        ...state,
        isFetching: false,
        authenticated: true,
        user: {
          uid: action.payload.user.uid,
          email: action.payload.user.email,
          password: action.meta,
        }
      }
    case AuthActionConst.LOGOUT_FULFILLED:
      return initialState;
    case AuthActionConst.LOGOUT_REJECTED:
    case AuthActionConst.LOGIN_FIREBASE_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: {
          message: action.payload.message,
          statusCode: action.payload.code,
        },
      };
    case AuthActionConst.SET_FINGER_PRINT:
      return {
        ...state,
        useFingerPrint: action.payload,
      }
    default:
      return state
  }
}

export default reducer