import {StyleSheet, ScrollView, Button} from 'react-native';
import React, {useState} from 'react';
import {AppointmentModal} from '../components';
import {useAppDispatch} from '../redux/hooks';
import {toggleHeaderModal} from '../redux/features/modalSlice';
import CallModal from '../modals/CallModal';
import {AppointmenStackProps} from '../navigation/AppointmentStack';

const Appointments = (props: AppointmenStackProps) => {
  const dispatch = useAppDispatch();

  const doctor: Doctor = {
    name: 'Dr. Elia Ana',
    department: 'Cardiologist',
    hospital: 'Mars Hospital',
    star: 5,
    image: require('../assets/onboarding/image_3.png'),
    reviews: 332,
    description:
      'Dr. Carly Angel is the top most immunologists specialist in Crist Hospital in London, UK. She achived several awards for her wonderful contribution sadfasdf assdsds dsdfsd fsdsdsdfsdf asdfasdf asdfasdf asdf asdf asdfasdf asdfd asdf asdfasdf',
  };

  return (
    <ScrollView style={styles.container}>
      <Button
        title="Show Modal"
        onPress={() => {
          dispatch(toggleHeaderModal());
        }}
      />
      <AppointmentModal doctor={doctor} />
      <CallModal doctor={doctor} />
    </ScrollView>
  );
};

export default Appointments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
