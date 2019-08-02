import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngredient.module.css';

class BurgerIngredient extends React.Component {
  render() {
    let ingredient = null;

    switch (this.props.ingredientType) {
      case 'bread-bottom':
        ingredient = <div className={styles.BreadBottom} />;
        break;
      case 'bread-top':
        ingredient = (
          <div className={styles.BreadTop}>
            <div className={styles.Seeds1} />
            <div className={styles.Seeds2} />
          </div>
        );
        break;
      case 'meat':
        ingredient = <div className={styles.Meat} />;
        break;
      case 'cheese':
        ingredient = <div className={styles.Cheese} />;
        break;
      case 'salad':
        ingredient = <div className={styles.Salad} />;
        break;
      case 'bacon':
        ingredient = <div className={styles.Bacon} />;
        break;
      case 'redOnion':
        ingredient = <div className={styles.RedOnion} />;
        break;
      case 'pickles':
        ingredient = <div className={styles.Pickles} />;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  ingredientType: PropTypes.string.isRequired,
};

export default BurgerIngredient;
