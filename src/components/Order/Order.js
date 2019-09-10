import React from 'react';

import styles from './Order.module.css';

const Order = (props) => {
  let formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(props.price);

  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const ingredientOutput = ingredients.map((ing) => {
    return (
      <span className={styles.Ingredient} key={ing.name}>
        {ing.name} ({ing.amount})
      </span>
    );
  });

  return (
    <div className={styles.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>USD {formattedPrice}</strong>
      </p>
    </div>
  );
};

export default Order;
