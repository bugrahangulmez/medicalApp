import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import React from 'react';
import ScreenHeader from '../components/ScreenHeader';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {toggleHeaderModal} from '../redux/features/modalSlice';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scaleHeight, scaleWidth} from '../constants/scale';
import {
  DoctorReviewCard,
  AppointmentDoctorDetailCard,
  DocAboutCard,
  VoiceCallButton,
  PatienceInformationCard,
} from '../components/index';
import {COLORS, FONTS} from '../constants/constants';
import CallIconSvg from '../svg/CallIconSvg';
import {AppointmenStackProps} from '../navigation/AppointmentStack';

const AppointmentModal = ({doctor}: {doctor: Doctor}) => {
  const {ScreenHeaderIsVisible} = useAppSelector(store => store.modal);
  const dispatch = useAppDispatch();

  const insets = useSafeAreaInsets();

  const patience: {
    name: string;
    surname: string;
    genre: 'Male' | 'Female';
  } = {
    name: 'Richard',
    surname: 'Lee',
    genre: 'Male',
  };

  return (
    <Modal animationType="slide" visible={ScreenHeaderIsVisible}>
      <ScreenHeader
        toggleModal={() => {
          dispatch(toggleHeaderModal());
        }}
        title="My Appointment"
      />
      <ScrollView style={[{marginTop: insets.top + scaleHeight(64)}]}>
        <AppointmentDoctorDetailCard doctor={doctor} />
        <DoctorReviewCard />
        <DocAboutCard description={doctor.description ?? ''} />
        <PatienceInformationCard patience={patience} />
        <VoiceCallButton text={'Start Voice Call (14.30 - 15.00 PM)'} />
      </ScrollView>
    </Modal>
  );
};

export default AppointmentModal;

const styles = StyleSheet.create({});
