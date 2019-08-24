import * as actionTypes from './actionTypes';
import axios from '../.././axios-orders';
const {
  PURCHASE_BURGER_SUCCESS,
  PURCHASE_BURGER_FAIL,
  PURCHASE_BURGER_START,
  PURCHASE_INIT,
  FETCH_ORDERS_FAIL,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_START,
} = actionTypes;

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
  return (dispatch) => {
    console.warn(dispatch);
    dispatch(purchaseBurgerStart());
    const queryParams = `?auth=${idToken}`;
    axios
      .post(`/orders.json${queryParams}`, orderData)
      .then((response) => {
        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch((error) => {
        dispatch(purchaseBurgerFail(error));
      });
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
  return (dispatch) => {
    dispatch(fetchOrdersStart());
    const queryParams = `?auth=${idToken}&orderBy="userId"&equalTo="${userId}"`;
    axios
      .get(`/orders.json${queryParams}`)
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch((err) => {
        dispatch(fetchOrdersFail(err));
      });
  };
}

export {
  purchaseBurger,
  purchaseInit,
  fetchOrdersSuccess,
  fetchOrdersFail,
  fetchOrdersStart,
  fetchOrders,
};
