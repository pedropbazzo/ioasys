import storage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'enterprises',
      storage,
      whitelist: ['auth', 'profile', 'enterprise', 'segment'],
    },
    reducers,
  );

  return persistedReducer;
};
