/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainStack from './src/navigators/MainStack';
import {navigationRef} from './src/navigators/NavigationService';
import store, {persistor} from './src/store';

const RootComponent = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <MainStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RootComponent />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
