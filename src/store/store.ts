import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore
} from 'redux-persist';

import authReducer from 'store/auth/reducer';
import settingsReducer from 'store/settings/reducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  settings: settingsReducer,
  auth: authReducer
}));

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'auth/login/fulfilled',
          'auth/login/rejected',
          'auth/logout/fulfilled',
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER]
      }
    }),
  reducer: persistedReducer
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
