import axios from '../../axios-orders';
import * as actionTypes from './actionTypes';
const {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INGREDIENTS,
  FETCH_INGREDIENTS_FAILED,
} = actionTypes;

export function addIngredient(ingName) {
  return {
    type: ADD_INGREDIENT,
    ingredientName: ingName,
  };
}

export function removeIngredient(ingName) {
  return {
    type: REMOVE_INGREDIENT,
    ingredientName: ingName,
  };
}

export function setIngredients(ingredients) {
  return {
    type: SET_INGREDIENTS,
    ingredients,
  };
}

export function fetchIngredientFailed() {
  return {
    type: FETCH_INGREDIENTS_FAILED,
  };
}

export function initIngredients() {
  return (dispatch) => {
    axios
      .get('https://react-burger-builder-d296e.firebaseio.com/ingredients.json')
      .then((response) => {
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        dispatch(fetchIngredientFailed());
      });
  };
}
