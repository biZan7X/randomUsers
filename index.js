/**
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import PushNotification from 'react-native-push-notification';

import App from './src/App';
import {name as appName} from './app.json';
import {store, persistor} from './src/store';

PushNotification.configure({
  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },

  requestPermissions: Platform.OS === 'ios',
});

// const testNotification = () => {
//   PushNotification.localNotification({
//     title: 'My Notification Title', // (optional)
//     message: 'My Notification Message', // (required)
//   });
// };

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
