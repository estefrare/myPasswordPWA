import {
  createStore,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer, { DVPState } from './modules';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
  stateReconciler: autoMergeLevel2,
};

const pReducer = persistReducer<DVPState>(persistConfig, rootReducer);

const middleware = [
  thunk,
]

export const store = createStore(
  pReducer,
  composeWithDevTools(applyMiddleware(...middleware)
));

export const persistor = persistStore(store);