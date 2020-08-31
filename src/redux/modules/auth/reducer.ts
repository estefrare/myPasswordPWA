import initialState from './initialState';
import { Reducer } from 'redux';
import { AuthState, AuthActionConst } from './types';
import { REHYDRATE } from 'redux-persist';

const reducer: Reducer<AuthState, any> = (state = initialState, action): AuthState => {
  switch (action.type) {
    case AuthActionConst.LOGOUT_FETCHING:
    case AuthActionConst.LOGIN_FIREBASE_FETCHING:
    case AuthActionConst.SIGN_UP_FIREBASE_FETCHING:
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
    case AuthActionConst.SIGN_UP_FIREBASE_FULFILLED:
      return {
        ...state,
        isFetching: false,
      }
    case AuthActionConst.LOGOUT_FULFILLED:
      return initialState;
    case AuthActionConst.LOGOUT_REJECTED:
    case AuthActionConst.LOGIN_FIREBASE_REJECTED:
    case AuthActionConst.SIGN_UP_FIREBASE_REJECTED:
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
    case REHYDRATE:
      if(action && action.payload && action.payload.auth) {
        return {
          ...action.payload.auth,
          isFetching: initialState.isFetching,
        };
      }
      return {
        ...state,
        isFetching: initialState.isFetching,
      };
    default:
      return state
  }
}

export default reducer