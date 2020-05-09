import * as TYPES from './types';
import * as ACTIONS from './actions';
import { ThunkDispatch } from 'redux-thunk';
import { DVPState } from 'redux/modules/index';
import { AnyAction } from 'redux';
import Firebase from 'helpers/firebase';
import { webAuthnSignup } from 'helpers/webauth'


export const loginWithFirebase = (params: TYPES.LoginParams) =>
  async (dispatch: ThunkDispatch<DVPState, {}, AnyAction>) => {
    dispatch(ACTIONS.loginWithFirebaseFetching());
    try {
      const response: any = await Firebase.auth().signInWithEmailAndPassword(params.email.trim(), params.password.trim());
      await webAuthnSignup(params.email.trim())
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
    await Firebase.auth().signOut();
    return dispatch(ACTIONS.logoutFulfilled());
  }
  catch (error) {
    return dispatch(ACTIONS.logoutRejected(error));
  }
};