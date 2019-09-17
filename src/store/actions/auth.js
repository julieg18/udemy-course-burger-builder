import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_USER,
  AUTH_INITIATE_LOGOUT,
  AUTH_LOGOUT,
  SET_AUTH_REDIRECT_PATH,
  AUTH_CHECK_TIMEOUT,
  AUTH_CHECK_STATE,
} from './actionTypes';

function authStart() {
  return {
    type: AUTH_START,
  };
}

function authSuccess(idToken, userId) {
  return {
    type: AUTH_SUCCESS,
    idToken,
    userId,
  };
}

function authFail(error) {
  return {
    type: AUTH_FAIL,
    error,
  };
}

function logout() {
  return {
    type: AUTH_INITIATE_LOGOUT,
  };
}

function logoutSucceed() {
  return {
    type: AUTH_LOGOUT,
  };
}

function checkAuthTimeout(expirationTime) {
  return {
    type: AUTH_CHECK_TIMEOUT,
    expirationTime,
  };
}

function auth(email, password, isSignup) {
  return {
    type: AUTH_USER,
    email,
    password,
    isSignup,
  };
}

function setAuthRedirectPath(path) {
  return {
    type: SET_AUTH_REDIRECT_PATH,
    path,
  };
}

function authCheckState() {
  return {
    type: AUTH_CHECK_STATE,
  };
}

export {
  authStart,
  authSuccess,
  authFail,
  logout,
  logoutSucceed,
  checkAuthTimeout,
  auth,
  setAuthRedirectPath,
  authCheckState,
};
