import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scaleHeight, scaleWidth} from '../constants/scale';
import {COLORS, FONTS} from '../constants/constants';

const DocSliderHeader = ({title, top}: {title: string; top: number}) => {
  return (
    <View style={[styles.container, {top: scaleHeight(top)}]}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity activeOpacity={0.75}>
        <Text style={styles.text}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DocSliderHeader;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    left: scaleWidth(24),
    right: scaleWidth(24),
    height: scaleHeight(24),
    width: scaleWidth(327),
  },
  title: {
    ...FONTS.semibold({fontSize: 16, lineHeight: 24}),
  },
  text: {
    ...FONTS.medium({fontSize: 14, lineHeight: 20}),
    color: COLORS.PRIMARY,
  },
});
