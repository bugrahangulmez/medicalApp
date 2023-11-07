import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scaleHeight, scaleWidth} from '../constants/scale';
import NotificationIconSvg from '../svg/NotificationIconSvg';

const NotificationIcon = () => {
  return (
    <View style={styles.container}>
      <NotificationIconSvg />
      {true && <View style={styles.dot} />}
    </View>
  );
};

export default NotificationIcon;

const styles = StyleSheet.create({
  container: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: scaleWidth(1),
    borderRadius: scaleWidth(10),
  },
  dot: {
    width: scaleWidth(8),
    height: scaleWidth(8),
    borderRadius: 50,
    position: 'absolute',
    backgroundColor: 'red',
    top: scaleHeight(10),
    right: scaleWidth(10),
    left: scaleWidth(22),
    bottom: scaleHeight(22),
  },
});
