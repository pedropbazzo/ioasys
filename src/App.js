import React from 'react';
import {Image, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import AppProvider from './hooks';
import Routes from './routes/index';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#312e38"
        hidden
        translucent
      />
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
