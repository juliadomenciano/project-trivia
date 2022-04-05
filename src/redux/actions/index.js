export const RECEIVE_API_SUCCESS = 'RECEIVE_API_SUCCESS';
export const USER_INFO = 'USER_INFO';

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
