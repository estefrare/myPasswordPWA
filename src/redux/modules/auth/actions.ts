import * as TYPES from './types';
import { action } from 'typesafe-actions';

export const loginWithFirebaseFetching = () => action(
  TYPES.AuthActionConst.LOGIN_FIREBASE_FETCHING,
);

export const loginWithFirebaseFulfilled = (data: any, password:string) => action(
  TYPES.AuthActionConst.LOGIN_FIREBASE_FULFILLED,
  data,
  password,
);

export const loginWithFirebaseRejected = (error: TYPES.FirebaseError) => action(
  TYPES.AuthActionConst.LOGIN_FIREBASE_REJECTED,
  error,
);

export const logoutFetching = () => action(
  TYPES.AuthActionConst.LOGOUT_FETCHING,
);

export const logoutFulfilled = () => action(
  TYPES.AuthActionConst.LOGOUT_FULFILLED,
);

export const logoutRejected = (error: TYPES.Error) => action(
  TYPES.AuthActionConst.LOGOUT_REJECTED,
  error
);

export const setFingerPrint = (value: boolean) => action(
  TYPES.AuthActionConst.SET_FINGER_PRINT,
  value
);

export const signUpWithFirebaseFetching = () => action(
  TYPES.AuthActionConst.SIGN_UP_FIREBASE_FETCHING,
);

export const signUpWithFirebaseFulfilled = (data: any) => action(
  TYPES.AuthActionConst.SIGN_UP_FIREBASE_FULFILLED,
  data,
);

export const signUpWithFirebaseRejected = (error: TYPES.FirebaseError) => action(
  TYPES.AuthActionConst.SIGN_UP_FIREBASE_REJECTED,
  error,
);