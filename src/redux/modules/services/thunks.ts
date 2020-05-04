import * as TYPES from './types';
import * as ACTIONS from './actions';
import { ThunkDispatch } from 'redux-thunk';
import { DVPState } from 'redux/modules/index';
import { AnyAction } from 'redux';
import { store } from 'redux/store';
import Firebase from 'helpers/firebase';

export const getServices: any = () => async (dispatch: ThunkDispatch<DVPState, {}, AnyAction>) => {
  dispatch(ACTIONS.getServicesFetching());
  try {
    const uid = store.getState().auth.user?.uid;
    await Firebase.firestore()
      .collection('services')
      .where('userId', '==', uid)
      .onSnapshot((querySnapshot: any) => {
        const servicesList: TYPES.Service[] = [];
        querySnapshot.forEach((documentSnapshot: any) => {
          servicesList.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        return dispatch(ACTIONS.getServicesFulfilled(servicesList));
      })
    
  }
  catch (error) {
    return dispatch(ACTIONS.getServicesRejected(error));
  }
};

export const editServices: any = (service: TYPES.Service) => async (dispatch: ThunkDispatch<DVPState, {}, AnyAction>) => {
  dispatch(ACTIONS.editServicesFetching());
  try {
    const ref = Firebase.firestore().collection('services').doc(service.key);
    await ref.update({
      name: service.name,
      username: service.username,
      password: service.password,
      link: service.link,
      note: service.note,
    });
    return dispatch(ACTIONS.editServicesFulfilled());
  }
  catch (error) {
    return dispatch(ACTIONS.editServicesRejected(error));
  }
};

export const deleteServices: any = (serviceId: TYPES.Service['key']) => async (dispatch: ThunkDispatch<DVPState, {}, AnyAction>) => {
  dispatch(ACTIONS.deleteServicesFetching());
  try {
    await Firebase.firestore().collection('services').doc(serviceId).delete();
    return dispatch(ACTIONS.deleteServicesFulfilled());
  }
  catch (error) {
    return dispatch(ACTIONS.deleteServicesRejected(error));
  }
};

export const addServices: any = (service: TYPES.Service) => async (dispatch: ThunkDispatch<DVPState, {}, AnyAction>) => {
  dispatch(ACTIONS.addServicesFetching());
  try {
    const uid = store.getState().auth.user?.uid;
    const ref = Firebase.firestore().collection('services');
    await ref.add({
      name: service.name,
      username: service.username,
      password: service.password,
      link: service.link,
      note: service.note,
      userId: uid,
    });

    return dispatch(ACTIONS.addServicesFulfilled());
  }
  catch (error) {
    return dispatch(ACTIONS.addServicesRejected(error));
  }
};