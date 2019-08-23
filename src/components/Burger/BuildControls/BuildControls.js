import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
  { label: 'Pickles', type: 'pickles' },
  { label: 'Red Onion', type: 'redOnion' },
  { label: 'Salad', type: 'salad' },
  { label: 'Veggie Burger Meat', type: 'veggieBurgerMeat' },
];

const BuildControls = (props) => {
  return (
    <div className={styles.BuildControls}>
      <p>
        Current Price: <strong>{props.price}</strong>
      </p>
      {controls.map((control) => (
        <BuildControl
          key={control.label}
          ingredientLabel={control.label}
          added={() => props.ingredientAdded(control.type)}
          removed={() => props.ingredientRemoved(control.type)}
          disabled={props.disabled[control.type]}
        />
      ))}
      <button
        className={styles.OrderButton}
        disabled={!props.purchaseable}
        onClick={props.ordered}
      >
        {props.isAuth ? 'Order Now' : 'Sign Up To Order'}
      </button>
    </div>
  );
};

export default BuildControls;
