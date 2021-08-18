import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './styles';

const UserListItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={{url: item.image}} style={styles.image} />
      <View>
        <Text style={styles.heading}>{item.name}</Text>
        <Text>{item.email}</Text>
      </View>
    </View>
  );
};

export default UserListItem;
