import { RECEIVE_API_SUCCESS } from '../actions';

const INITIAL_STATE = '';

const token = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_API_SUCCESS:
    return action.token;
  default:
    return state;
  }
};

export default token;
