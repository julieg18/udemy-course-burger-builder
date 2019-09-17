import {
  PURCHASE_BURGER,
  PURCHASE_BURGER_SUCCESS,
  PURCHASE_BURGER_FAIL,
  PURCHASE_BURGER_START,
  PURCHASE_INIT,
  FETCH_ORDERS,
  FETCH_ORDERS_FAIL,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_START,
} from './actionTypes';

function purchaseBurgerSuccess(id, orderData) {
  return {
    type: PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData,
  };
}

function purchaseBurgerFail(error) {
  return {
    type: PURCHASE_BURGER_FAIL,
    error,
  };
}

function purchaseBurgerStart() {
  return {
    type: PURCHASE_BURGER_START,
  };
}

function purchaseBurger(orderData, idToken) {
  return {
    type: PURCHASE_BURGER,
    orderData,
    idToken,
  };
}

function purchaseInit() {
  return {
    type: PURCHASE_INIT,
  };
}

function fetchOrdersSuccess(orders) {
  return {
    type: FETCH_ORDERS_SUCCESS,
    orders,
  };
}

function fetchOrdersFail(error) {
  return {
    type: FETCH_ORDERS_FAIL,
  };
}

function fetchOrdersStart() {
  return {
    type: FETCH_ORDERS_START,
  };
}

function fetchOrders(idToken, userId) {
  return {
    type: FETCH_ORDERS,
    idToken,
    userId,
  };
}

export {
  purchaseBurger,
  purchaseInit,
  purchaseBurgerFail,
  purchaseBurgerStart,
  purchaseBurgerSuccess,
  fetchOrdersSuccess,
  fetchOrdersFail,
  fetchOrdersStart,
  fetchOrders,
};
