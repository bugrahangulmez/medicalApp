import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BackIconSvg from '../svg/BackIconSvg';
import {scaleHeight, scaleWidth} from '../constants/scale';
import {COLORS, FONTS} from '../constants/constants';

const ScreenHeader = ({
  title,
  toggleModal,
}: {
  title: string;
  toggleModal: () => void;
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleModal}>
        <BackIconSvg />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: scaleHeight(44),
    left: scaleWidth(24),
    right: scaleWidth(24),
    paddingVertical: scaleWidth(12),
    width: scaleWidth(327),
    height: scaleHeight(64),
    zIndex: 10,
    backgroundColor: COLORS.WHITE,
  },
  button: {
    position: 'absolute',
    left: 0,
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderRadius: scaleWidth(8),
    padding: scaleWidth(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: scaleWidth(1),
    borderColor: COLORS.THIRD_GREY,
  },
  title: {
    ...FONTS.bold({fontSize: 16, lineHeight: 24}),
  },
});
