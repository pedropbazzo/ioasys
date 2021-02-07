import { all, put, call, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/api/v1/users/auth/sign_in', {
      email,
      password,
    });

    const { uid, client, 'access-token': token } = response.headers;
    const { investor } = response.data;

    const profile = {
      ...investor,
      balanceFormatted: formatPrice(investor.balance),
      portfolioValueFormatted: formatPrice(investor.portfolio_value),
    };

    api.defaults.headers = { uid, client, 'access-token': token };

    yield put(signInSuccess(token, client, uid, profile));
  } catch (error) {
    Alert.alert('Email ou Senha Invalidos', 'Confira os dados');
    yield put(signFailure());
  }
}
export function setToken({ payload }) {
  if (!payload) return;

  const { token, client, uid } = payload.auth;

  if (token && client && uid) {
    api.defaults.headers = { uid, client, 'access-token': token };
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
