import fetchAPI from '../../services/fetchAPI';

export const RECEIVE_API_SUCCESS = 'RECEIVE_API_SUCCESS';
export const RECEIVE_API_FAILURE = 'RECEIVE_API_FAILURE';
export const RESPONSE_API = 'RESPONSE_API';
export const REQUEST_API = 'REQUEST_API';
export const USER_INFO = 'USER_INFO';
export const SHOW_ANSWERS = 'SHOW_ANSWERS';
export const TOTAL_SCORE = 'TOTAL_SCORE';
export const RESET_SCORE = 'RESET_SCORE';

export const receiveTokenSuccess = (token) => ({
  type: RECEIVE_API_SUCCESS,
  token,
});

export const getUserInfo = (name, email) => ({
  type: USER_INFO,
  name,
  email,
});

export const getToken = () => async (dispatch) => {
  const request = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await request.json();
  dispatch(receiveTokenSuccess(data.token));
};

export const responseAPI = (data) => ({
  type: RESPONSE_API,
  data,
});

export const getAPIdata = (myToken, times) => async (dispatch) => {
  const request = await fetchAPI(myToken, times);
  dispatch(responseAPI(request));
};

export const showAnswers = (showResults) => ({
  type: SHOW_ANSWERS,
  showResults,
});

export const addTotalScore = (total) => ({
  type: TOTAL_SCORE,
  score: total,
});

export const resetScoreAction = () => ({
  type: RESET_SCORE,
});
