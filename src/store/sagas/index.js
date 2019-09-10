import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authUserSaga,
  authCheckStateSaga,
} from './auth';
import { initIngredientsSaga } from './burgerBuilder';
import { purchaseBurgerSaga, fetchOrdersSaga } from './order';
const {
  INIT_INGREDIENTS,
  AUTH_CHECK_TIMEOUT,
  AUTH_INITIATE_LOGOUT,
  AUTH_USER,
  AUTH_CHECK_STATE,
  PURCHASE_BURGER,
  FETCH_ORDERS,
} = actionTypes;

function* watchAuth() {
  yield all([
    takeEvery(AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
    takeEvery(AUTH_USER, authUserSaga),
    takeEvery(AUTH_CHECK_STATE, authCheckStateSaga),
  ]);
}

function* watchBurgerBuilder() {
  yield takeEvery(INIT_INGREDIENTS, initIngredientsSaga);
}

function* watchOrder() {
  yield takeLatest(PURCHASE_BURGER, purchaseBurgerSaga);
  yield takeEvery(FETCH_ORDERS, fetchOrdersSaga);
}

export { watchAuth, watchBurgerBuilder, watchOrder };
