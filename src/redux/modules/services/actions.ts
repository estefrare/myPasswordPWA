import * as TYPES from './types';
import { action } from 'typesafe-actions';

export const getServicesFetching = () => action(
  TYPES.ServicesActionConst.GET_SERVICES_FETCHING,
);

export const getServicesFulfilled = (services: TYPES.Service[]) => action(
  TYPES.ServicesActionConst.GET_SERVICES_FULFILLED,
  services
);

export const getServicesRejected = (error: TYPES.Error) => action(
  TYPES.ServicesActionConst.GET_SERVICES_REJECTED,
  error
);

export const editServicesFetching = () => action(
  TYPES.ServicesActionConst.EDIT_SERVICES_FETCHING,
);

export const editServicesFulfilled = (service: TYPES.Service) => action(
  TYPES.ServicesActionConst.EDIT_SERVICES_FULFILLED,
  service,
);

export const editServicesRejected = (error: TYPES.Error) => action(
  TYPES.ServicesActionConst.EDIT_SERVICES_REJECTED,
  error
);

export const deleteServicesFetching = () => action(
  TYPES.ServicesActionConst.DELETE_SERVICES_FETCHING,
);

export const deleteServicesFulfilled = (serviceId: TYPES.Service['key']) => action(
  TYPES.ServicesActionConst.DELETE_SERVICES_FULFILLED,
  serviceId,
);

export const deleteServicesRejected = (error: TYPES.Error) => action(
  TYPES.ServicesActionConst.DELETE_SERVICES_REJECTED,
  error
);

export const addServicesFetching = () => action(
  TYPES.ServicesActionConst.ADD_SERVICES_FETCHING,
);

export const addServicesFulfilled = (service: TYPES.Service) => action(
  TYPES.ServicesActionConst.ADD_SERVICES_FULFILLED,
  service,
);

export const addServicesRejected = (error: TYPES.Error) => action(
  TYPES.ServicesActionConst.ADD_SERVICES_REJECTED,
  error
);