import {call, put, all, takeEvery} from 'redux-saga/effects';
import {GET_LIST_TINH, updateListTinh} from '../actions/ttl';
import {apiGetListTinh} from './apiHelpers';

export function* getListTinhSaga() {
  try {
    const response = yield call(apiGetListTinh);
    const listPayload = response.data?.payload;

    if (listPayload) {
      console.log('listPayload', listPayload);
      yield put(updateListTinh(listPayload));
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log('done');
  }
}

export default function* () {
  yield all([takeEvery(GET_LIST_TINH, getListTinhSaga)]);
}
