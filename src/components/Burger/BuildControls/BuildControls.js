import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
  { label: 'Red Onion', type: 'redOnion' },
  { label: 'Pickes', type: 'pickles' },
];

const BuildControls = (props) => (
  <div className={styles.BuildControls}>
    <p>
      Current Price: <strong>${props.price.toFixed(2)}</strong>
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
      Order Now
    </button>
  </div>
);

export default BuildControls;
