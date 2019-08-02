import React from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Model/Model';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.1,
  cheese: 0.2,
  meat: 0.5,
  bacon: 0.3,
  redOnion: 0.2,
  pickles: 0.1,
};

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
        redOnion: 0,
        pickles: 0,
      },
      totalPrice: 1,
      purchaseable: false,
      purchasing: false,
    };
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
    alert('CONTINUE');
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <React.Fragment>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            price={this.state.totalPrice}
            purchaseContinued={this.purchaseContinueHandler}
            purchaseCanceled={this.purchaseCancelHandler}
            ingredients={this.state.ingredients}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          ingredientRemoved={this.removeIngredientHandler}
          ingredientAdded={this.addIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
