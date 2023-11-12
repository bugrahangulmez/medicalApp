import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Appointments, VoiceCall} from '../screens';

type RootStackParamList = {
  AppointmentList: undefined;
  VoiceCall: undefined;
};

export type AppointmenStackProps = NativeStackScreenProps<
  RootStackParamList,
  'AppointmentList'
>;

export default function AppointmentStack() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="AppointmentList" component={Appointments} />
      <Stack.Screen name="VoiceCall" component={VoiceCall} />
    </Stack.Navigator>
  );
}
