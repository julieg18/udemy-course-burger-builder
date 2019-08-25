import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
const {
  PURCHASE_BURGER_SUCCESS,
  PURCHASE_BURGER_FAIL,
  PURCHASE_BURGER_START,
  PURCHASE_INIT,
  FETCH_ORDERS_FAIL,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
} = actionTypes;

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

function purchaseInit(state, action) {
  return updateObject(state, { purchased: false });
}

function purchaseBurgerStart(state, action) {
  return updateObject(state, { loading: true });
}

function purchaseBurgerSuccess(state, action) {
  const newOrder = updateObject(action.OrderData, { id: action.orderId });
  return updateObject(state, {
    loading: false,
    orders: state.orders.concat(newOrder),
    purchased: true,
  });
}

function purchaseBurgerFail(state, action) {
  return updateObject(state, { loading: false });
}

function fetchOrdersStart(state, action) {
  return updateObject(state, { loading: true });
}

function fetchOrdersSuccess(state, action) {
  return updateObject(state, { orders: action.orders, loading: false });
}

function fetchOrdersFail(state, action) {
  return updateObject(state, { loading: false });
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case PURCHASE_INIT:
      return purchaseInit(state, action);
    case PURCHASE_BURGER_START:
      return purchaseBurgerStart(state, action);
    case PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(state, action);
    case PURCHASE_BURGER_FAIL:
      return purchaseBurgerFail(state, action);
    case FETCH_ORDERS_START:
      return fetchOrdersStart(state, action);
    case FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);
    case FETCH_ORDERS_FAIL:
      return fetchOrdersFail(state, action);
    default:
      return state;
  }
}

export default reducer;
