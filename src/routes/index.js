import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';

import {useAuth} from '../hooks/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

function Routes() {
  const {investor, loading} = useAuth();

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#36393f',
        }}>
        <ActivityIndicator size={50} color="#878787" />
      </View>
    );
  }

  return investor ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
