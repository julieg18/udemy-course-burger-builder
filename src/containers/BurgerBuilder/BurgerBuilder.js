import React from 'react';
import axios from '../../axios-orders';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import styles from './BurgerBuilder.module.css';

const INGREDIENT_PRICES = {
  salad: 0.1,
  cheese: 0.2,
  meat: 0.75,
  veggieBurgerMeat: 0.75,
  bacon: 0.3,
  redOnion: 0.2,
  pickles: 0.1,
};

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: null,
      totalPrice: 1,
      purchaseable: false,
      purchasing: false,
      loading: false,
      error: false,
    };
  }

  componentDidMount() {
    axios
      .get('https://react-burger-builder-d296e.firebaseio.com/ingredients.json')
      .then((response) => {
        this.setState({ ingredients: response.data });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  updatePurchaseableState(ingredients) {
    const sum = Object.values(ingredients).reduce((acc, val) => acc + val);
    this.setState({
      purchaseable: sum > 0,
    });
  }

  addIngredientHandler = (ingredientType) => {
    const oldCount = this.state.ingredients[ingredientType];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[ingredientType] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[ingredientType];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
    this.updatePurchaseableState(updatedIngredients);
  };

  removeIngredientHandler = (ingredientType) => {
    const oldCount = this.state.ingredients[ingredientType];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[ingredientType] = updatedCount;
    const priceSubtraction = INGREDIENT_PRICES[ingredientType];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceSubtraction;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
    this.updatePurchaseableState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          '=' +
          encodeURIComponent(this.state.ingredients[i]),
      );
    }
    queryParams.push(`price=${this.state.totalPrice}`);
    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString,
    });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let formattedTotalPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(this.state.totalPrice);
    let orderSummary = null;
    let burger = this.state.error ? (
      <p className={styles.BurgerLoadingError}>
        Ingredients can not be loaded!
      </p>
    ) : (
      <Spinner />
    );
    if (this.state.ingredients) {
      burger = (
        <React.Fragment>
          <Burger ingredients={this.state.ingredients} />
          <BurgerControls
            ingredientRemoved={this.removeIngredientHandler}
            ingredientAdded={this.addIngredientHandler}
            disabled={disabledInfo}
            price={formattedTotalPrice}
            purchaseable={this.state.purchaseable}
            ordered={this.purchaseHandler}
          />
        </React.Fragment>
      );
      orderSummary = (
        <OrderSummary
          price={formattedTotalPrice}
          purchaseContinued={this.purchaseContinueHandler}
          purchaseCanceled={this.purchaseCancelHandler}
          ingredients={this.state.ingredients}
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

export default withErrorHandler(BurgerBuilder, axios);
