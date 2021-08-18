import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import LandingScreen from './Screens/LandingScreen';

const App = () => {
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
