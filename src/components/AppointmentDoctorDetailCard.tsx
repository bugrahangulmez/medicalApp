import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {scaleHeight, scaleWidth} from '../constants/scale';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import DocStarSvg from '../svg/DocStarSvg';
import {COLORS, FONTS} from '../constants/constants';
import LikeIconSvg from '../svg/LikeIconSvg';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {toggleFav} from '../redux/features/docSlice';

const AppointmentDoctorDetailCard = ({doctor}: {doctor: Doctor}) => {
  const insets = useSafeAreaInsets();

  const {list} = useAppSelector(store => store.doctor);
  const dispatch = useAppDispatch();
  function toggleDoctorFav() {
    dispatch(toggleFav(doctor));
  }

  return (
    <View
      style={[
        styles.container,
        {top: scaleHeight(124) - scaleHeight(64) - insets.top},
      ]}>
      {/* Yukarıda top hizalamasını şuna göre yaptım;
            normalde figmadan aldığım değer 124 ancak screen header(64) ve safearea kadar değer çıkarttım çünkü yukarı scroll
            yapıldığı zaman screenheader ve safe area nın background color'unu white yapabilmek için.
          */}
      <View>
        <Image
          source={doctor.image}
          style={styles.image}
          resizeMethod="scale"
          resizeMode="cover"
        />
        <TouchableOpacity
          activeOpacity={0.75}
          style={styles.likeIconContainer}
          onPress={toggleDoctorFav}>
          <LikeIconSvg isLiked={list.some(doc => doc.name === doctor.name)} />
        </TouchableOpacity>
      </View>
      <View style={styles.doctorDescriptionContainer}>
        <View style={styles.doctorTextContainer}>
          <Text style={styles.doctorName}>{doctor.name}</Text>
          <Text style={styles.doctorDepartment}>
            {doctor.department} | {doctor.hospital}
          </Text>
        </View>
        <View style={styles.doctorStarContainer}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: scaleWidth(18),
              width: scaleWidth(18),
              marginRight: scaleWidth(8),
            }}>
            <DocStarSvg />
          </View>
          <Text
            style={
              styles.doctorStarText
            }>{`${doctor.star} (${doctor.reviews} reviews)`}</Text>
        </View>
      </View>
    </View>
  );
};

export default AppointmentDoctorDetailCard;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: scaleWidth(24),
    right: scaleWidth(24),
    height: scaleHeight(198 + 70),
    width: scaleWidth(327),
  },
  image: {
    height: scaleHeight(198),
    width: scaleWidth(327),
    borderTopRightRadius: scaleWidth(8),
    borderTopLeftRadius: scaleWidth(8),
  },
  likeIconContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 50,
    width: scaleWidth(30),
    height: scaleHeight(30),
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: scaleWidth(8),
    right: scaleWidth(8),
  },
  doctorDescriptionContainer: {
    flexDirection: 'row',
    padding: scaleWidth(8),
    shadowColor: COLORS.SHADOW,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    backgroundColor: COLORS.WHITE,
  },
  doctorTextContainer: {
    width: scaleWidth(167),
    alignItems: 'stretch',
  },
  doctorName: {
    ...FONTS.semibold({fontSize: 16, lineHeight: 24}),
  },
  doctorDepartment: {
    ...FONTS.medium({fontSize: 12, lineHeight: 18}),
    color: COLORS.TEXT_GREY,
  },
  doctorStarContainer: {
    flexDirection: 'row',
    width: scaleWidth(131),
    paddingLeft: scaleWidth(4),
    height: scaleHeight(18),
    alignItems: 'center',
  },
  doctorStarText: {
    ...FONTS.medium({fontSize: 12, lineHeight: 18}),
  },
});
