import * as TYPES from './types';
import * as ACTIONS from './actions';
import { ThunkDispatch } from 'redux-thunk';
import { DVPState } from 'redux/modules/index';
import { AnyAction } from 'redux';
import { store } from 'redux/store';
import * as AES from 'helpers/encrypt/index.js'
import Firebase from 'helpers/firebase';

export const getServices: any = () => async (dispatch: ThunkDispatch<DVPState, {}, AnyAction>) => {
  dispatch(ACTIONS.getServicesFetching());
  try {
    const user = store.getState().auth.user;
    const unsubscribe = await Firebase.firestore()
      .collection('services')
      .where('userId', '==', user?.uid)
      .onSnapshot((querySnapshot: any) => {
        const servicesList: TYPES.Service[] = [];
        querySnapshot.forEach(async (documentSnapshot: any) => {
          const data = documentSnapshot.data()
          servicesList.push({
            ...data,
            key: documentSnapshot.id,
            password: data.encrypted
              ? await AES.decrypt(data.password, user?.password) 
              : data.password,
          });
        });
        dispatch(ACTIONS.getServicesFulfilled(servicesList));
        return unsubscribe()
      })
  }
  catch (error) {
    return dispatch(ACTIONS.getServicesRejected(error));
  }
};

export const editServices: any = (service: TYPES.Service) => async (dispatch: ThunkDispatch<DVPState, {}, AnyAction>) => {
  dispatch(ACTIONS.editServicesFetching());
  try {
    const user = store.getState().auth.user;
    const ref = Firebase.firestore().collection('services').doc(service.key);
    await ref.update({
      name: service.name,
      username: service.username,
      password: await AES.encrypt(service.password, user?.password),
      link: service.link || '',
      note: service.note || '',
      encrypted: true,
    });
    return dispatch(ACTIONS.editServicesFulfilled(service));
  }
  catch (error) {
    return dispatch(ACTIONS.editServicesRejected(error));
  }
};

export const deleteServices: any = (serviceId: TYPES.Service['key']) => async (dispatch: ThunkDispatch<DVPState, {}, AnyAction>) => {
  dispatch(ACTIONS.deleteServicesFetching());
  try {
    await Firebase.firestore().collection('services').doc(serviceId).delete();
    return dispatch(ACTIONS.deleteServicesFulfilled(serviceId));
  }
  catch (error) {
    return dispatch(ACTIONS.deleteServicesRejected(error));
  }
};

export const addServices: any = (service: TYPES.Service) => async (dispatch: ThunkDispatch<DVPState, {}, AnyAction>) => {
  dispatch(ACTIONS.addServicesFetching());
  try {
    const user = store.getState().auth.user;
    const ref = Firebase.firestore().collection('services');
    const newService = await ref.add({
      name: service.name,
      username: service.username,
      password: await AES.encrypt(service.password, user?.password),
      link: service.link,
      note: service.note,
      userId: user?.uid,
      encrypted: true,
    });
    return dispatch(ACTIONS.addServicesFulfilled({ ...service, key: newService.id }));
  }
  catch (error) {
    return dispatch(ACTIONS.addServicesRejected(error));
  }
};