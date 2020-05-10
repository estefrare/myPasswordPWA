import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface AuthState {
  isFetching: boolean;
  authenticated: boolean;
  error?: Error;
  useFingerPrint: boolean;
  user?: {
    password: string;
    email: string;
    uid: string;
  }
}

export interface Error {
  message: string;
  statusCode: number | string;
}

export interface FirebaseError {
  message: string;
  code: string;
}

export interface LoginParams {
  email: string;
  password: string;
}

export type ActionsType = ActionType<typeof actions>;

export enum AuthActionConst {
  LOGIN_FIREBASE_FETCHING = 'LOGIN_FIREBASE_FETCHING',
  LOGIN_FIREBASE_FULFILLED = 'LOGIN_FIREBASE_FULFILLED',
  LOGIN_FIREBASE_REJECTED = 'LOGIN_FIREBASE_REJECTED',
  LOGOUT_FULFILLED = 'LOGOUT_FULFILLED',
  LOGOUT_REJECTED = 'LOGOUT_REJECTED',
  LOGOUT_FETCHING = 'LOGOUT_FETCHING',
  SET_FINGER_PRINT = 'SET_FINGER_PRINT',
  SIGN_UP_FIREBASE_FETCHING = 'SIGN_UP_FIREBASE_FETCHING',
  SIGN_UP_FIREBASE_FULFILLED = 'SIGN_UP_FIREBASE_FULFILLED',
  SIGN_UP_FIREBASE_REJECTED = 'SIGN_UP_FIREBASE_REJECTED',
}