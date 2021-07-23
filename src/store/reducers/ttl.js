import {UPDATE_LIST_TINH} from '../actions/ttl';

const defaultState = {
  data: [],
};

export default function listTinh(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_LIST_TINH:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
