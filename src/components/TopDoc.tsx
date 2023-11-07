import {
  StyleSheet,
  Text,
  View,
  ImageProps,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {scaleHeight, scaleWidth} from '../constants/scale';
import DocStarSvg from '../svg/DocStarSvg';
import LikeIconSvg from '../svg/LikeIconSvg';
import {COLORS, FONTS} from '../constants/constants';

interface Doctor {
  name: string;
  department: string;
  hospital: string;
  star: number;
  image: ImageProps;
}
const TopDoc = ({doctor, top}: {doctor: Doctor; top: number}) => {
  return (
    <TouchableOpacity style={[styles.container, {top: scaleHeight(top)}]}>
      <Image source={doctor.image} style={styles.image} />
      <View style={styles.docContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.docName}>{doctor.name}</Text>
          <TouchableOpacity>
            <LikeIconSvg isLiked={true} />
          </TouchableOpacity>
        </View>
        <Text style={styles.departmentText}>
          {doctor.department} | {doctor.hospital}
        </Text>
        <View style={styles.starContainer}>
          <DocStarSvg />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.star}>{doctor.star}</Text>
            <Text style={styles.reviews}>{'(7932 reviews)'}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TopDoc;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: scaleWidth(327),
    height: scaleHeight(116),
    left: scaleWidth(24),
    right: scaleWidth(24),
    padding: scaleWidth(12),
    borderRadius: scaleWidth(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#222222',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    backgroundColor: COLORS.WHITE,
  },
  image: {
    width: scaleWidth(90),
    height: scaleHeight(100),
    borderRadius: scaleWidth(8),
  },
  docContainer: {
    width: scaleWidth(195),
    height: scaleHeight(84),
    justifyContent: 'center',
    gap: scaleHeight(8),
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  docName: {
    ...FONTS.semibold({fontSize: 16, lineHeight: 24}),
  },
  descContainer: {},
  departmentText: {
    ...FONTS.medium({fontSize: 12, lineHeight: 18}),
    color: COLORS.TEXT_GREY,
  },
  starContainer: {
    flexDirection: 'row',
    gap: scaleWidth(8),
  },
  star: {
    ...FONTS.medium({fontSize: 12, lineHeight: 18}),
  },
  reviews: {
    ...FONTS.medium({fontSize: 12, lineHeight: 18}),
  },
});
