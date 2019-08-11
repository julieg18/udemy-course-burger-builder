import React from 'react';
import styles from './CheckoutSummary.module.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const CheckoutSummary = (props) => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>We hope it tastes delicous!</h1>
      <div className={styles.Burger}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button
        clicked={props.checkoutCancelled}
        className={styles.uppercase}
        btnType="Danger"
      >
        Cancel
      </Button>
      <Button
        clicked={props.checkoutContinued}
        className={styles.uppercase}
        btnType="Success"
      >
        Continue
      </Button>
    </div>
  );
};

export default CheckoutSummary;
