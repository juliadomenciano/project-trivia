import { REQUEST_API, RESPONSE_API, RECEIVE_API_FAILURE, USER_INFO } from '../actions';

const INITIAL_STATE = {
  response: false,
  error: null,
  data: [],
  name: '',
  email: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      response: true,
    };
  case RESPONSE_API:
    return {
      ...state,
      data: action.data,
    };
  case RECEIVE_API_FAILURE:
    return {
      ...state,
      error: action.error,
    };
  case USER_INFO:
    return {
      ...state,
      name: action.name,
      email: action.email,
    };
  default:
    return state;
  }
};

  
};

export default player;
