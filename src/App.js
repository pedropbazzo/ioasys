import React from 'react';
import {Image, StatusBar} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import './config/ReactotronConfig';

import AppProvider from './hooks';
import Routes from './routes/index';

import {store, persistor} from './store';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="#312e38"
            hidden
            translucent
          />
          <AppProvider>
            <Routes />
          </AppProvider>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
