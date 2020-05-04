import { combineReducers, ReducersMapObject } from 'redux';
import authReducer from './auth/reducer';
import servicesReducer from './services/reducer';
import { AuthState, ActionsType as AuthActions } from './auth/types';
import { ServicesState, ActionsType as ServicesActions } from './services/types';

export interface DVPState {
  auth: AuthState;
  services: ServicesState;
}

export type RootAction = AuthActions | ServicesActions

const reducers: ReducersMapObject<DVPState> = {
  auth: authReducer,
  services: servicesReducer,
};

export default combineReducers<DVPState>(reducers);
