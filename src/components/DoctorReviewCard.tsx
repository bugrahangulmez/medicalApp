import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scaleHeight, scaleWidth} from '../constants/scale';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PatientIconSvg from '../svg/PatientIconSvg';
import ExperienceIconSvg from '../svg/ExperienceIconSvg';
import ReviewStarIconSvg from '../svg/ReviewStarIconSvg';
import ReviewIconSvg from '../svg/ReviewIconSvg';
import {FONTS, COLORS} from '../constants/constants';

const DoctorReviewCard = () => {
  const insets = useSafeAreaInsets();

  const Icon = ({
    icon,
    label,
    value,
  }: {
    icon: JSX.Element;
    label: string;
    value: string;
  }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.iconContainer}>{icon}</View>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
    );
  };

  const data: {icon: JSX.Element; label: string; value: string}[] = [
    {
      icon: <PatientIconSvg />,
      label: 'Patients',
      value: '658+',
    },
    {
      icon: <ExperienceIconSvg />,
      label: 'Years expert',
      value: '11+',
    },
    {
      icon: <ReviewStarIconSvg />,
      label: 'Rating',
      value: '5.0',
    },
    {
      icon: <ReviewIconSvg />,
      label: 'Reviews',
      value: '300+',
    },
  ];

  return (
    <View
      style={[
        styles.container,
        {
          top: scaleHeight(408) - scaleHeight(64) - insets.top,
          flexDirection: 'row',
        },
      ]}>
      {data.map((item, index) => {
        return <Icon key={index} {...item} />;
      })}
    </View>
  );
};

export default DoctorReviewCard;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: scaleWidth(327),
    height: scaleHeight(94),
    left: scaleWidth(24),
    right: scaleWidth(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderRadius: 50,
    backgroundColor: '#F5F5FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scaleHeight(8),
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: scaleHeight(94),
  },
  value: {
    ...FONTS.medium({fontSize: 16, lineHeight: 24}),
  },
  label: {
    ...FONTS.medium({fontSize: 12, lineHeight: 18}),
    color: COLORS.TEXT_GREY,
  },
});
