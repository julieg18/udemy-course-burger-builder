import * as actionTypes from './actionTypes';
const { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } = actionTypes;

function authStart() {
  return {
    type: AUTH_START,
  };
}

function authSuccess(authData) {
  return {
    type: AUTH_SUCCESS,
    authData,
  };
}

function authFail(error) {
  return {
    type: AUTH_FAIL,
    error,
  };
}

function auth(email, password) {
  return (dispatch) => dispatch(authStart());
}

export { authStart, authSuccess, authFail, auth };
