export const REQUEST_API = 'REQUEST_API';
export const RECEIVE_API_SUCCESS = 'RECEIVE_API_SUCCESS';
export const RECEIVE_API_FAILURE = 'RECEIVE_API_FAILURE';

export const requestApi = () => ({
  type: REQUEST_API,
});

export const receiveApiSuccess = (token) => ({
  type: RECEIVE_API_SUCCESS,
  token,

});

export const receiveApiFailure = (error) => ({
  type: RECEIVE_API_FAILURE,
  error,
});

export const getToken = () => async (dispatch) => {
  dispatch(requestApi());
  try {
    const request = await fetch('https://opentdb.com/api_token.php?command=request');
    const data = await request.json();
    dispatch(receiveApiSuccess(data));
  } catch (error) {
    dispatch(receiveApiFailure(error));
  }
};

/* export default requestApi; */
