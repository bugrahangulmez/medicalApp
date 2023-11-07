import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CategoryIconSvg from '../svg/CategoryIconSvg';
import {scaleWidth} from '../constants/scale';

const CategoryIcon = () => {
  return (
    <View style={styles.container}>
      <CategoryIconSvg />
    </View>
  );
};

export default CategoryIcon;

const styles = StyleSheet.create({
  container: {
    width: scaleWidth(20),
    height: scaleWidth(20),
  },
});
