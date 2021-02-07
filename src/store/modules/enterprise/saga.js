import {all, put, call, takeLatest} from 'redux-saga/effects';
import {Alert} from 'react-native';

import api from '../../../services/api';

import {enterprisesSuccess} from './actions';

export function* loadEnterprises() {
  try {
    const response = yield call(api.get, '/api/v1/enterprises');

    const {enterprises} = response.data;
    console.log(enterprises);

    yield put(enterprisesSuccess(enterprises));
  } catch (error) {
    Alert.alert('Erro ao carregar os dados', 'Tente novamente mais tarde');
  }
}

export default all([takeLatest('@auth/SIGN_IN_SUCCESS', loadEnterprises)]);
