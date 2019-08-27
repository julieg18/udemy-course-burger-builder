import React from 'react';
import { connect } from 'react-redux';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { fetchOrders } from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends React.Component {
  componentDidMount() {
    const { idToken, userId } = this.props;
    this.props.onFetchOrders(idToken, userId);
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
  const { idToken, userId } = state.auth;
  const { orders, loading } = state.order;
  return {
    idToken,
    orders,
    loading,
    userId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchOrders: (idToken, userId) => dispatch(fetchOrders(idToken, userId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withErrorHandler(Orders, axios));
