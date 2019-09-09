import axios from 'axios';
import { delay } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';
import {
  authStart,
  authFail,
  logoutSucceed,
  logout,
  authSuccess,
  checkAuthTimeout,
} from '../actions/index';

function* logoutSaga(action) {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('expirationDate');
  yield localStorage.removeItem('userId');
  yield put(logoutSucceed());
}

function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(logout());
}

function* authUserSaga(action) {
  const { email, password, isSignup } = action;
  put(authStart());
  const authData = {
    email,
    password,
    returnSecureToken: true,
  };
  let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`;
  if (!isSignup) {
    url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`;
  }
  try {
    const res = yield axios.post(url, authData);
    const expirationDate = yield new Date(
      new Date().getTime() + res.data.expiresIn * 1000,
    );
    yield localStorage.setItem('token', res.data.idToken);
    yield localStorage.setItem('expirationDate', expirationDate);
    yield localStorage.setItem('userId', res.data.localId);
    yield put(authSuccess(res.data.idToken, res.data.localId));
    yield put(checkAuthTimeout(res.data.expiresIn));
  } catch (err) {
    put(authFail(err.res.data.error));
  }
}

function* authCheckStateSaga(action) {
  const token = yield localStorage.getItem('token');
  if (!token) {
    put(logout());
  } else {
    const expirationDate = yield new Date(
      localStorage.getItem('expirationDate'),
    );
    if (expirationDate <= new Date()) {
      yield put(logout());
    } else {
      const userId = yield localStorage.getItem('userId');
      yield put(authSuccess(token, userId));
      yield put(
        checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000,
        ),
      );
    }
  }
}

export { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga };
