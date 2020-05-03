import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface AuthState {
  isFetching: boolean;
  authenticated: boolean;
  error?: Error;
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
}