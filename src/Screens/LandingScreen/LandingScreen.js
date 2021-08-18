import React from 'react';
import {View, Button, FlatList} from 'react-native';
import {connect} from 'react-redux';

import {getUser} from '../../actions';
import UserListItem from '../../components/UserListItem';
import styles from './styles';

const LandingScreen = ({users, getUser}) => {
  return (
    <View style={styles.container}>
      <Button title="Add Users" onPress={() => getUser()} />
      <FlatList
        data={users}
        keyExtractor={item => item.name}
        renderItem={({item}) => <UserListItem item={item} />}
        style={styles.list}
      />
    </View>
  );
};

const mapStateToProps = ({users}) => ({users});

export default connect(mapStateToProps, {getUser})(LandingScreen);
