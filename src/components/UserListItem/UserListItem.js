import PushNotificationIOS from '@react-native-community/push-notification-ios';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import PushNotification from 'react-native-push-notification';

import styles from './styles';

const UserListItem = ({item}) => {
  //& for some reason we dont need it
  // const handleNotificationIOS = () => {
  //   PushNotificationIOS.addNotificationRequest({
  //     title: 'you selected' + item.name,
  //     body: item.email,
  //   });
  // };

  const instantNotification = () => {
    PushNotification.localNotification({
      channelId: 'channel1',
      title: item.name + ' sent you a message',
      message: item.email,
      picture: item.image,
    });
  };

  const scheduledNotification = () => {
    PushNotification.localNotificationSchedule({
      channelId: 'channel1',
      title: item.name + ' sent you a message',
      message: item.email,
      picture: item.image,
      date: new Date(Date.now() + 10 * 1000), // in 60 secs
      allowWhileIdle: true,
    });
  };

  const handleNotification = () => {
    scheduledNotification();
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
