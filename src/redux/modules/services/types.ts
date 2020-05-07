import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface ServicesState {
  isFetching: boolean;
  isDeleting: boolean;
  isEditing: boolean;
  list: Service[];
  error?: Error;
}

export interface Error {
  message: string;
  statusCode: number | string;
}

export interface Service {
  key?: string;
  name: string;
  username: string;
  password: string;
  link?: string;
  note?: string;
}

export type ActionsType = ActionType<typeof actions>;

export enum ServicesActionConst {
  GET_SERVICES_FULFILLED = 'GET_SERVICES_FULFILLED',
  GET_SERVICES_REJECTED = 'GET_SERVICES_REJECTED',
  GET_SERVICES_FETCHING = 'GET_SERVICES_FETCHING',
  EDIT_SERVICES_FULFILLED = 'EDIT_SERVICES_FULFILLED',
  EDIT_SERVICES_REJECTED = 'EDIT_SERVICES_REJECTED',
  EDIT_SERVICES_FETCHING = 'EDIT_SERVICES_FETCHING',
  DELETE_SERVICES_FULFILLED = 'DELETE_SERVICES_FULFILLED',
  DELETE_SERVICES_REJECTED = 'DELETE_SERVICES_REJECTED',
  DELETE_SERVICES_FETCHING = 'DELETE_SERVICES_FETCHING',
  ADD_SERVICES_FULFILLED = 'ADD_SERVICES_FULFILLED',
  ADD_SERVICES_REJECTED = 'ADD_SERVICES_REJECTED',
  ADD_SERVICES_FETCHING = 'ADD_SERVICES_FETCHING',
}