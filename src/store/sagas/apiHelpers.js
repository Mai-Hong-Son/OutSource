import {call} from 'redux-saga/effects';
import * as api from '../../services/index';

export function* apiGetListTinh() {
  return yield call(api.getListTinh);
}

export function* apiGetSubMenu() {
  return yield call(api.getSubMenu);
}
