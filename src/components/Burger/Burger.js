import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} ingredientType={igKey} />;
    });
  });

  return (
    <div className={styles.Burger}>
      <BurgerIngredient ingredientType="bread-top" />
      {transformedIngredients}
      <BurgerIngredient ingredientType="bread-bottom" />
    </div>
  );
};

export default Burger;
