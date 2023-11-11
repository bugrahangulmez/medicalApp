import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import ScreenHeader from './ScreenHeader';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {toggleHeaderModal} from '../redux/features/modalSlice';
import AppointmentDoctorDetailCard from './AppointmentDoctorDetailCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scaleHeight} from '../constants/scale';
import DoctorReviewCard from './DoctorReviewCard';

const AppointmentModal = () => {
  const {ScreenHeaderIsVisible} = useAppSelector(store => store.modal);
  const dispatch = useAppDispatch();

  const insets = useSafeAreaInsets();

  const doctor: Doctor = {
    name: 'Dr. Elia Ana',
    department: 'Cardiologist',
    hospital: 'Mars Hospital',
    star: 5,
    image: require('../assets/onboarding/image_3.png'),
    reviews: 332,
  };

  return (
    <Modal animationType="slide" visible={ScreenHeaderIsVisible}>
      <ScreenHeader
        toggleModal={() => {
          dispatch(toggleHeaderModal());
        }}
        title="My Appointment"
      />
      <ScrollView
        style={[styles.container, {marginTop: insets.top + scaleHeight(64)}]}>
        <AppointmentDoctorDetailCard doctor={doctor} />
        <DoctorReviewCard />
      </ScrollView>
    </Modal>
  );
};

export default AppointmentModal;

const styles = StyleSheet.create({
  container: {},
});
