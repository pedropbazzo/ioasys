import {all, put, takeLatest} from 'redux-saga/effects';
import {Alert} from 'react-native';

import {loadSegmentsRequest} from './actions';

export function* loadSegments({payload}) {
  console.log(payload);
  try {
    const {enterprises} = payload;

    const segments = [];

    enterprises.map((item) => {
      const segment = segments.find(
        (itemSegment) => itemSegment.id === item.enterprise_type.id,
      );

      if (!segment) {
        segments.push(item.enterprise_type);
      }
    });

    yield put(loadSegmentsRequest(segments));
  } catch (error) {
    Alert.alert('Erro ao carregar segments', 'Tente novamente mais tarde');
  }
}

export default all([
  takeLatest('@enterprise/ENTERPRISES_SUCCESS', loadSegments),
]);
