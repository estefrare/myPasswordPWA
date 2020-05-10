import * as TYPES from './types';
import * as ACTIONS from './actions';
import { ThunkDispatch } from 'redux-thunk';
import { DVPState } from 'redux/modules/index';
import { AnyAction } from 'redux';
import { store } from 'redux/store';
import Firebase from 'helpers/firebase';
import CryptoJS from 'crypto-js';

export const getServices: any = () => async (dispatch: ThunkDispatch<DVPState, {}, AnyAction>) => {
  dispatch(ACTIONS.getServicesFetching());
  try {
    const user = store.getState().auth.user;
    const unsubscribe = await Firebase.app.firestore()
      .collection('services')
      .where('userId', '==', user?.uid)
      .onSnapshot(async (querySnapshot: any) => {
        const servicesList: TYPES.Service[] = querySnapshot.docs.map((item: any) => {
          const data = item.data()
          let password = data.password
          if(data.encryptedV2) {
            const decryptedBytes = CryptoJS.AES.decrypt(data.password, user?.password || '');
            password = decryptedBytes.toString(CryptoJS.enc.Utf8);
          }
          return{
            ...data,
            key: item.id,
            password,
          }
        })
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
    const ref = Firebase.app.firestore().collection('services').doc(service.key);
    await ref.update({
      name: service.name,
      username: service.username,
      password: CryptoJS.AES.encrypt(service.password, user?.password || '').toString(),
      link: service.link || '',
      note: service.note || '',
      encryptedV2: true,
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
    await Firebase.app.firestore().collection('services').doc(serviceId).delete();
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
    const ref = Firebase.app.firestore().collection('services');
    const newService = await ref.add({
      name: service.name,
      username: service.username,
      password: CryptoJS.AES.encrypt(service.password, user?.password || '').toString(),
      link: service.link,
      note: service.note,
      userId: user?.uid,
      encryptedV2: true,
    });
    return dispatch(ACTIONS.addServicesFulfilled({ ...service, key: newService.id }));
  }
  catch (error) {
    return dispatch(ACTIONS.addServicesRejected(error));
  }
};