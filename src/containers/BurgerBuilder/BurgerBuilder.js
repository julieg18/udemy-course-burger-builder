import React from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-orders';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import styles from './BurgerBuilder.module.css';
import * as actions from '../../store/actions/index';
const {
  addIngredient,
  removeIngredient,
  initIngredients,
  purchaseInit,
} = actions;

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      purchasing: false,
      loading: false,
    };
  }

  componentDidMount() {
    this.props.onInitIngredients();
  }

  updatePurchaseableState(ingredients) {
    const sum = Object.values(ingredients).reduce((acc, val) => acc + val);
    return sum > 0;
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push({
      pathname: '/checkout',
    });
  };

  render() {
    const disabledInfo = {
      ...this.props.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let formattedTotalPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(this.props.totalPrice);
    let orderSummary = null;
    let burger = this.props.error ? (
      <p className={styles.BurgerLoadingError}>
        Ingredients can not be loaded!
      </p>
    ) : (
      <Spinner />
    );
    if (this.props.ingredients) {
      burger = (
        <React.Fragment>
          <Burger ingredients={this.props.ingredients} />
          <BurgerControls
            ingredientRemoved={this.props.onIngredientRemoved}
            ingredientAdded={this.props.onIngredientAdded}
            disabled={disabledInfo}
            price={formattedTotalPrice}
            purchaseable={this.updatePurchaseableState(this.props.ingredients)}
            ordered={this.purchaseHandler}
          />
        </React.Fragment>
      );
      orderSummary = (
        <OrderSummary
          price={formattedTotalPrice}
          purchaseContinued={this.purchaseContinueHandler}
          purchaseCanceled={this.purchaseCancelHandler}
          ingredients={this.props.ingredients}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <React.Fragment>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onIngredientAdded: (ingredientName) =>
      dispatch(addIngredient(ingredientName)),
    onIngredientRemoved: (ingredientName) => {
      dispatch(removeIngredient(ingredientName));
    },
    onInitIngredients: () => dispatch(initIngredients()),
    onInitPurchase: () => dispatch(purchaseInit()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withErrorHandler(BurgerBuilder, axios));
