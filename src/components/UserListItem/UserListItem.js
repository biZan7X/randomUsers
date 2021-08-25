import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import PushNotification from 'react-native-push-notification';

import styles from './styles';

const UserListItem = ({item}) => {
  const handleNotification = () => {
    PushNotification.localNotification({
      channelId: 'channel1',
      title: 'You clicked on ' + item.name,
      message: item.email,
      bigPictureUrl: item.image,
    });
  };
  return (
    <TouchableOpacity onPress={handleNotification}>
      <View style={styles.container}>
        <Image source={{url: item.image}} style={styles.image} />
        <View>
          <Text style={styles.heading}>{item.name}</Text>
          <Text>{item.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserListItem;
