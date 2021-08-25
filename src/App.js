import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import PushNotification from 'react-native-push-notification';

import LandingScreen from './Screens/LandingScreen';

const App = () => {
  useEffect(() => {
    createChannels();
  }, []);

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'channel1',
      channelName: 'test channel',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <LandingScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
