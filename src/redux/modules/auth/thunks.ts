import * as TYPES from './types';
import * as ACTIONS from './actions';
import { ThunkDispatch } from 'redux-thunk';
import { DVPState } from 'redux/modules/index';
import { AnyAction } from 'redux';
import Firebase from 'helpers/firebase';

export const loginWithFirebase = (params: TYPES.LoginParams) =>
  async (dispatch: ThunkDispatch<DVPState, {}, AnyAction>) => {
    dispatch(ACTIONS.loginWithFirebaseFetching());
    try {
      const response: any = await Firebase.app.auth().signInWithEmailAndPassword(params.email.trim(), params.password.trim());
      return dispatch(ACTIONS.loginWithFirebaseFulfilled(response, params.password.trim()));
    }
    catch (error) {
      return dispatch(ACTIONS.loginWithFirebaseRejected(error));
    }
  };

export const logout: any = () => async (dispatch: ThunkDispatch<DVPState, {}, AnyAction>) => {
  dispatch(ACTIONS.logoutFetching());
  try {
    await localStorage.removeItem('users');
    await Firebase.app.auth().signOut();
    return dispatch(ACTIONS.logoutFulfilled());
  }
  catch (error) {
    return dispatch(ACTIONS.logoutRejected(error));
  }
};

export const signUpWithFirebase = (params: TYPES.LoginParams) =>
  async (dispatch: ThunkDispatch<DVPState, {}, AnyAction>) => {
    dispatch(ACTIONS.signUpWithFirebaseFetching());
    try {
      const response: any = await Firebase.app.auth().createUserWithEmailAndPassword(params.email.trim(), params.password.trim())
      return dispatch(ACTIONS.signUpWithFirebaseFulfilled(response));
    }
    catch (error) {
      return dispatch(ACTIONS.signUpWithFirebaseRejected(error));
    }
  };