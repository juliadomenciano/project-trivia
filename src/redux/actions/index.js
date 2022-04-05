export const REQUEST_API = 'REQUEST_API';
export const RECEIVE_API_SUCCESS = 'RECEIVE_API_SUCCESS';
export const RECEIVE_API_FAILURE = 'RECEIVE_API_FAILURE';

export const receiveTokenSuccess = (token) => ({
  type: RECEIVE_API_SUCCESS,
  token,

});

export const getToken = () => async (dispatch) => {
  const request = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await request.json();
  dispatch(receiveTokenSuccess(data.token));
};

/* export default requestApi; */
