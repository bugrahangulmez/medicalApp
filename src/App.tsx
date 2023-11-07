import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Onboarding} from './screens';
import {NavigationContainer} from '@react-navigation/native';
import {TabBarNav} from './navigation';
import {useState} from 'react';

const App = () => {
  const [status, setStatus] = useState<'active' | 'done'>('active');
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {status === 'active' ? (
          <Onboarding setStatus={setStatus} />
        ) : (
          <TabBarNav />
        )}
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;