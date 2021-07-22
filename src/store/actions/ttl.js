// Redux
export const UPDATE_LIST_TINH = 'UPDATE_LIST_TINH';
export const updateListTinh = list => ({
  type: UPDATE_LIST_TINH,
  payload: list,
});

// Saga
export const GET_LIST_TINH = 'GET_LIST_TINH';
export const getListTinhSagaAction = () => ({
  type: GET_LIST_TINH,
});
