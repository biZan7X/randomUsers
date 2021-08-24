/**
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';

import App from './src/App';
import {name as appName} from './app.json';
import {store, persistor} from './src/store';

const connectedApp = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => connectedApp);
