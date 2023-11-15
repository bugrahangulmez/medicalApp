import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Onboarding} from './screens';
import {NavigationContainer} from '@react-navigation/native';
import {TabBarNav} from './navigation';
import {useState} from 'react';
import ReduxProvider from './redux/Provider';

const App = () => {
  // App Router
  const [status, setStatus] = useState<'active' | 'done'>('active');
  return (
    <NavigationContainer>
      <ReduxProvider>
        <SafeAreaProvider>
          {status === 'active' ? (
            <Onboarding setStatus={setStatus} />
          ) : (
            <TabBarNav />
          )}
        </SafeAreaProvider>
      </ReduxProvider>
    </NavigationContainer>
  );
};

export default App;
