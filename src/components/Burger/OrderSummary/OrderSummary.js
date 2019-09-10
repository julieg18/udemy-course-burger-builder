import React from 'react';

import Button from '../../UI/Button/Button';
import styles from './OrderSummary.module.css';

class OrderSummary extends React.Component {
  // This could be a functional component, doesn't have to be a class

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        let ingredientName = igKey;
        ingredientName = ingredientName === 'redOnion' ? 'red Onion' : igKey;
        ingredientName =
          ingredientName === 'veggieBurgerMeat'
            ? 'Veggie Burger Meat'
            : ingredientName;
        return (
          <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>
              {ingredientName}
            </span>
            : {this.props.ingredients[igKey]}
          </li>
        );
      },
    );
    return (
      <React.Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button
          classes={styles.uppercase}
          clicked={this.props.purchaseCanceled}
          btnType="Danger"
        >
          Cancel
        </Button>
        <Button
          classes={styles.uppercase}
          clicked={this.props.purchaseContinued}
          btnType="Success"
        >
          Continue
        </Button>
      </React.Fragment>
    );
  }
}

export default OrderSummary;
