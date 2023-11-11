import {StyleSheet, ScrollView, Button} from 'react-native';
import React, {useState} from 'react';
import {AppointmentModal} from '../components';
import {useAppDispatch} from '../redux/hooks';
import {toggleHeaderModal} from '../redux/features/modalSlice';

const Appointments = () => {
  const dispatch = useAppDispatch();
  return (
    <ScrollView style={styles.container}>
      <Button
        title="Show Modal"
        onPress={() => {
          dispatch(toggleHeaderModal());
        }}
      />
      <AppointmentModal />
    </ScrollView>
  );
};

export default Appointments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
