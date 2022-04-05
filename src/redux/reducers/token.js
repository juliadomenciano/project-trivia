import { RECEIVE_API_FAILURE, RECEIVE_API_SUCCESS, REQUEST_API } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  token: {},
  error: '',
};

const token = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isFetching: true,
    };
  case RECEIVE_API_SUCCESS:
    return {
      ...state,
      isFetching: false,
      token: action.token,
    };
  case RECEIVE_API_FAILURE:
    return {
      ...state,
      isFetching: false,
      error: action.error,
    };
  default:
    return state;
  }
};

export default token;
