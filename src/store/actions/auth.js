import axios from 'axios';
import * as actionTypes from './actionTypes';
const { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } = actionTypes;

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
    type: AUTH_LOGOUT,
  };
}

function checkAuthTimeout(expirationTime) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
}

function auth(email, password, isSignup) {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
      process.env.API_KEY
    }`;
    if (!isSignup) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
        process.env.API_KEY
      }`;
    }
    axios
      .post(url, authData)
      .then((res) => {
        console.log(res);
        dispatch(authSuccess(res.data.idToken, res.data.localId));
        dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err.response.data.error));
      });
  };
}

export { authStart, authSuccess, authFail, logout, checkAuthTimeout, auth };
