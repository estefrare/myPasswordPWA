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
      const response: any = await Firebase.auth().signInWithEmailAndPassword(params.email, params.password);
      return dispatch(ACTIONS.loginWithFirebaseFulfilled(response));
    }
    catch (error) {
      return dispatch(ACTIONS.loginWithFirebaseRejected(error));
    }
  };

export const logout: any = () => async (dispatch: ThunkDispatch<DVPState, {}, AnyAction>) => {
  dispatch(ACTIONS.logoutFetching());
  try {
    await Firebase.auth().signOut();
    return dispatch(ACTIONS.logoutFulfilled());
  }
  catch (error) {
    return dispatch(ACTIONS.logoutRejected(error));
  }
};