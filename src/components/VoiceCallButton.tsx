import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {scaleWidth, scaleHeight} from '../constants/scale';
import CallIconSvg from '../svg/CallIconSvg';
import {FONTS, COLORS} from '../constants/constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {AppointmenStackProps} from '../navigation/AppointmentStack';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {
  toggleHeaderModal,
  toggleVoiceCallModal,
} from '../redux/features/modalSlice';

const VoiceCallButton = ({text}: {text: string}) => {
  const dispatch = useAppDispatch();

  const insets = useSafeAreaInsets();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(toggleHeaderModal());
        dispatch(toggleVoiceCallModal());
      }}
      style={[
        styles.callButton,
        {top: scaleHeight(728) - scaleHeight(64) - insets.top},
      ]}>
      <CallIconSvg />
      <Text style={styles.callButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default VoiceCallButton;

const styles = StyleSheet.create({
  callButton: {
    position: 'absolute',
    left: scaleWidth(24),
    right: scaleWidth(24),
    backgroundColor: COLORS.PRIMARY,
    flexDirection: 'row',
    padding: scaleWidth(16),
    borderRadius: scaleWidth(12),
  },
  callButtonText: {
    ...FONTS.semibold({fontSize: 14, lineHeight: 20}),
    color: COLORS.WHITE,
    textAlign: 'center',
    width: scaleWidth(267),
  },
});
