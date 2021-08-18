import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';

import {getUser} from '../../actions';

const LandingScreen = ({users, getUser}) => {
  return (
    <View>
      <Text>{users[0].name}</Text>
      <Button title="Add Users" onPress={() => getUser()} />
    </View>
  );
};

const mapStateToProps = ({users}) => ({users});

export default connect(mapStateToProps, {getUser})(LandingScreen);
