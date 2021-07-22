import {apiClient} from './api';

export function getListTinh() {
  return new apiClient().get('/base/get-tinh');
}

export function getSubMenu() {
  return new apiClient().get('/bds/home/sub-menu');
}
