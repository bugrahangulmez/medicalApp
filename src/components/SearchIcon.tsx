import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchIconSvg from '../svg/SearchIconSvg';
import {scaleWidth} from '../constants/scale';

const SearchIcon = () => {
  return (
    <View style={styles.container}>
      <SearchIconSvg />
    </View>
  );
};

export default SearchIcon;

const styles = StyleSheet.create({
  container: {
    width: scaleWidth(20),
    height: scaleWidth(20),
  },
});
