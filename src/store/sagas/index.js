import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authUserSaga,
  authCheckStateSaga,
} from './auth';
import { initIngredientsSaga } from './burgerBuilder';
const {
  INIT_INGREDIENTS,
  AUTH_CHECK_TIMEOUT,
  AUTH_INITIATE_LOGOUT,
  AUTH_USER,
  AUTH_CHECK_STATE,
} = actionTypes;

function* watchAuth() {
  yield takeEvery(AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(AUTH_USER, authUserSaga);
  yield takeEvery(AUTH_CHECK_STATE, authCheckStateSaga);
}

function* watchBurgerBuilder() {
  yield takeEvery(INIT_INGREDIENTS, initIngredientsSaga);
}

export { watchAuth, watchBurgerBuilder };
