import React from 'react';
import { connect } from 'react-redux';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
const { fetchOrders } = actions;

class Orders extends React.Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.idToken);
  }

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.orders.map((order) => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      ));
    }
    return <div>{orders}</div>;
  }
}

function mapStateToProps(state) {
  const { idToken } = state.auth;
  const { orders, loading } = state.order;
  return {
    idToken,
    orders,
    loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchOrders: (idToken) => dispatch(fetchOrders(idToken)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withErrorHandler(Orders, axios));
