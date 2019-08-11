import React from 'react';
// import { withRouter } from 'react-router-dom';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} ingredientType={igKey} />;
      });
    })
    .flat();
  // .reduce((arr, el) => {
  //   return arr.concat(el);
  // }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  console.log('burger', props.ingredients);
  console.count('burger', props.ingredients);
  console.log('trans', transformedIngredients);
  console.count('trans', transformedIngredients);
  return (
    <div className={styles.Burger}>
      <BurgerIngredient ingredientType="bread-top" />
      {transformedIngredients}
      <BurgerIngredient ingredientType="bread-bottom" />
    </div>
  );
};
// get router props with withRouter
// export default withRouter(Burger);
export default Burger;
