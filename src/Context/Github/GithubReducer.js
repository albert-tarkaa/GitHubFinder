import {
  SEARCH_USERS,
  SET_LOADING,
  GET_REPOS,
  SET_ALERT,
  CLEAR_USERS,
  REMOVE_ALERT,
  GET_USER,
} from '../Types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return { ...state, users: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};
