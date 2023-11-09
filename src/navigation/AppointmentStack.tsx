import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Appointments} from '../screens';

export default function AppointmentStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Appointment" component={Appointments} />
    </Stack.Navigator>
  );
}
