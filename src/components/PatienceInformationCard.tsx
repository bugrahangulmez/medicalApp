import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scaleWidth, scaleHeight} from '../constants/scale';
import {FONTS, COLORS} from '../constants/constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const PatienceInformationCard = ({
  patience,
}: {
  patience: {name: string; surname: string; genre: 'Male' | 'Female'};
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.patienceContainer,
        {top: scaleHeight(628) - scaleHeight(64) - insets.top},
      ]}>
      <Text style={styles.patienceHeader}>Patient Information</Text>
      <Text style={styles.patienceFullName}>
        Full Name : {patience.name} {patience.surname}
      </Text>
      <Text style={styles.patienceGenre}>Genre : {patience.genre}</Text>
    </View>
  );
};

export default PatienceInformationCard;

const styles = StyleSheet.create({
  patienceContainer: {
    position: 'absolute',
    left: scaleWidth(24),
  },
  patienceHeader: {
    ...FONTS.semibold({fontSize: 18, lineHeight: 24}),
    marginBottom: scaleHeight(12),
  },
  patienceFullName: {
    ...FONTS.regular({fontSize: 14, lineHeight: 20}),
    color: COLORS.TEXT_GREY,
  },
  patienceGenre: {
    ...FONTS.regular({fontSize: 14, lineHeight: 20}),
    color: COLORS.TEXT_GREY,
  },
});
