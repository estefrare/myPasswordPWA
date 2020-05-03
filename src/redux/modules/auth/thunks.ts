// import * as TYPES from './types';
// import * as ACTIONS from './actions';
// import { ThunkDispatch } from 'redux-thunk';
// import { DVPState } from 'redux/modules/index';
// import { AnyAction } from 'redux';
// import Firebase from 'src/helpers/firebase';

export const loginWithFirebase = () => ({})
  // async (dispatch: ThunkDispatch<DVPState, {}, AnyAction>) => {
  //   dispatch(ACTIONS.loginWithFirebaseFetching());
  //   try {
  //     const response: any = await Firebase.auth().signInWithEmailAndPassword(params.email, params.password);
  //     const token = await response.user.getIdToken();
  //     return dispatch(ACTIONS.loginWithFirebaseFulfilled({ ...response, token }));
  //   }
  //   catch (error) {
  //     return dispatch(ACTIONS.loginWithFirebaseRejected(error));
  //   }
  // };