import {fork} from 'redux-saga/effects';
import ttl from './ttl';

export default function* rootSaga() {
  yield fork(ttl);
}
