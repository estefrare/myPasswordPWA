import * as TYPES from './types';
import { action } from 'typesafe-actions';

export const loginWithFirebaseFetching = () => action(
  TYPES.AuthActionConst.LOGIN_FIREBASE_FETCHING,
);

export const loginWithFirebaseFulfilled = (data: any) => action(
  TYPES.AuthActionConst.LOGIN_FIREBASE_FULFILLED,
  data,
);

export const loginWithFirebaseRejected = (error: TYPES.FirebaseError) => action(
  TYPES.AuthActionConst.LOGIN_FIREBASE_REJECTED,
  error,
);
