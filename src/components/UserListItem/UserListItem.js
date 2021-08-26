import PushNotificationIOS from '@react-native-community/push-notification-ios';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import PushNotification from 'react-native-push-notification';

import styles from './styles';

const UserListItem = ({item}) => {
  const handleNotification = () => {
    PushNotification.localNotification({
      channelId: 'channel1',
      title: item.name + ' sent you a message',
      message: item.email,
      picture: item.image,
    });
  };

  //& for some reason we dont need it
  // const handleNotificationIOS = () => {
  //   PushNotificationIOS.addNotificationRequest({
  //     title: 'you selected' + item.name,
  //     body: item.email,
  //   });
  // };

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
