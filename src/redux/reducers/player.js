import { REQUEST_API, RESPONSE_API, RECEIVE_API_FAILURE, USER_INFO,
  SHOW_ANSWERS, TOTAL_SCORE, RESET_SCORE } from '../actions';

const INITIAL_STATE = {
  assertions: 0,
  score: 0,
  response: false,
  error: null,
  data: [],
  name: '',
  gravatarEmail: '',
  showResults: false,
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
      gravatarEmail: action.email,
    };
  case SHOW_ANSWERS:
    return {
      ...state,
      showResults: action.showResults,
    };
  case TOTAL_SCORE:
    return {
      ...state,
      score: state.score + action.score,
      assertions: state.assertions + 1,
    };
  case RESET_SCORE:
    return {
      ...state,
      score: 0,
    };
  default:
    return state;
  }
};

export default player;
