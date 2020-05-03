import { combineReducers, ReducersMapObject } from 'redux';
import authReducer from './auth/reducer';
import { AuthState, ActionsType } from './auth/types';

export interface DVPState {
  auth: AuthState;
}

export type RootAction = ActionsType

const reducers: ReducersMapObject<DVPState> = {
  auth: authReducer,
};

export default combineReducers<DVPState>(reducers);
