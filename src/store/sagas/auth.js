import axios from 'axios';
import { delay } from 'redux-saga/effects';
import { put, call } from 'redux-saga/effects';
import {
  authStart,
  authFail,
  logoutSucceed,
  logout,
  authSuccess,
  checkAuthTimeout,
} from '../actions/index';

function* logoutSaga(action) {
  yield call([localStorage, 'removeItem'], 'token');
  yield call([localStorage, 'removeItem'], 'expirationDate');
  yield call([localStorage, 'removeItem'], 'userId');
  yield put(logoutSucceed());
}

function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(logout());
}

function* authUserSaga(action) {
  const { email, password, isSignup } = action;
  yield put(authStart());
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
    const { idToken, localId, expiresIn } = res.data;
    yield localStorage.setItem('token', idToken);
    yield localStorage.setItem('expirationDate', expirationDate);
    yield localStorage.setItem('userId', localId);
    yield put(authSuccess(idToken, localId));
    yield put(checkAuthTimeout(expiresIn));
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
