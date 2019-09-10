import axios from '../../axios-orders';
import { put } from 'redux-saga/effects';

import {
  purchaseBurgerStart,
  purchaseBurgerSuccess,
  purchaseBurgerFail,
  fetchOrdersStart,
  fetchOrdersSuccess,
  fetchOrdersFail,
} from '../actions/index';

function* purchaseBurgerSaga(action) {
  const { idToken, orderData } = action;
  yield put(purchaseBurgerStart());
  try {
    const queryParams = `?auth=${idToken}`;
    const response = yield axios.post(`/orders.json${queryParams}`, orderData);
    yield put(purchaseBurgerSuccess(response.data.name, orderData));
  } catch (error) {
    yield put(purchaseBurgerFail(error));
  }
}

function* fetchOrdersSaga(action) {
  const { idToken, userId } = action;
  yield put(fetchOrdersStart());
  try {
    const queryParams = `?auth=${idToken}&orderBy="userId"&equalTo="${userId}"`;
    const response = yield axios.get(`/orders.json${queryParams}`);
    const fetchedOrders = [];
    for (let key in response.data) {
      fetchedOrders.push({
        ...response.data[key],
        id: key,
      });
    }
    yield put(fetchOrdersSuccess(fetchedOrders));
  } catch (error) {
    yield put(fetchOrdersFail(error));
  }
}

export { purchaseBurgerSaga, fetchOrdersSaga };
