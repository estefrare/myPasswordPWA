import React from 'react';
import ReactDOM from 'react-dom';

import 'index.css';
import App from 'App';

import { persistor, store } from 'store/store';
import { Provider } from 'react-redux';

import * as serviceWorker from 'serviceWorker';
import { PersistGate } from 'redux-persist/integration/react';

import 'helpers/i18n';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
