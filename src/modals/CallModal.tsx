import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {
  toggleHeaderModal,
  toggleVoiceCallModal,
} from '../redux/features/modalSlice';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  scaleHeight,
  scaleWidth,
} from '../constants/scale';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../constants/constants';
import {FONTS} from '../constants/constants';
import SoundIconSvg from '../svg/SoundIconSvg';
import CallOffSvg from '../svg/CallOffSvg';
import MicrophoneIconSvg from '../svg/MicrophoneIconSvg';

const CallModal = ({doctor}: {doctor: Doctor}) => {
  const {VoiceCallModalIsVisible} = useAppSelector(store => store.modal);
  const dispatch = useAppDispatch();

  function handleEndCall() {
    dispatch(toggleVoiceCallModal());
    dispatch(toggleHeaderModal());
  }

  return (
    <Modal animationType="slide" visible={VoiceCallModalIsVisible}>
      <ImageBackground source={doctor.image} style={styles.imagebackground}>
        {/* Linear gradient background */}
        <View style={styles.coverOpacity}>
          <LinearGradient
            colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.1)']}
            style={{height: SCREEN_HEIGHT, width: SCREEN_WIDTH}}
            start={{x: 0, y: 1}}
            end={{x: 0, y: 0}}
          />
        </View>
        {/* Doctor */}
        <View style={styles.doctorContainer}>
          <Image source={doctor.image} style={styles.doctorImage} />
          <Text style={styles.doctorName}>{doctor.name}</Text>
          <View style={styles.clockContainer}>
            <View style={styles.dot} />
            <Text style={styles.clock}>19:00 Minute</Text>
          </View>
        </View>
        {true && (
          <Text style={styles.recordingText}>Audio recording is active...</Text>
        )}
        <View style={styles.bottomIconsContainer}>
          <TouchableOpacity style={styles.iconContainer}>
            <SoundIconSvg />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handleEndCall}>
            <CallOffSvg />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <MicrophoneIconSvg />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Modal>
  );
};

export default CallModal;

const styles = StyleSheet.create({
  imagebackground: {
    height: SCREEN_HEIGHT,
  },
  coverOpacity: {
    position: 'absolute',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    top: 0,
    left: 0,
    right: 0,
  },
  doctorContainer: {
    position: 'absolute',
    top: scaleHeight(314),
    right: scaleWidth(137),
    left: scaleWidth(138),
    alignItems: 'center',
  },
  doctorImage: {
    width: scaleWidth(100),
    height: scaleWidth(100),
    borderRadius: 50,
  },
  doctorName: {
    color: COLORS.WHITE,
    textAlign: 'center',
    ...FONTS.semibold({fontSize: 18, lineHeight: 26}),
    marginTop: scaleHeight(14),
    marginBottom: scaleHeight(16),
  },
  clockContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: scaleWidth(100),
    width: scaleWidth(122),
    height: scaleHeight(26),
    paddingHorizontal: scaleWidth(12),
    paddingVertical: scaleHeight(4),
    alignItems: 'center',
    flexDirection: 'row',
    gap: scaleWidth(8),
  },
  dot: {
    backgroundColor: 'red',
    borderRadius: 50,
    width: scaleWidth(8),
    height: scaleWidth(8),
  },
  clock: {
    ...FONTS.medium({fontSize: 12, lineHeight: 18}),
    textAlign: 'center',
  },
  recordingText: {
    position: 'absolute',
    top: scaleHeight(672),
    left: scaleWidth(113.31),
    color: COLORS.WHITE,
  },
  bottomIconsContainer: {
    position: 'absolute',
    top: scaleHeight(724),
    width: scaleWidth(216),
    left: scaleWidth(80),
    right: scaleWidth(79),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: scaleWidth(56),
    height: scaleWidth(56),
    backgroundColor: COLORS.WHITE,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
