import axios from '../../axios-orders';
import * as actionTypes from './actionTypes';
const {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INGREDIENTS,
  FETCH_INGREDIENTS_FAILED,
} = actionTypes;

function addIngredient(ingName) {
  return {
    type: ADD_INGREDIENT,
    ingredientName: ingName,
  };
}

function removeIngredient(ingName) {
  return {
    type: REMOVE_INGREDIENT,
    ingredientName: ingName,
  };
}

function setIngredients(ingredients) {
  return {
    type: SET_INGREDIENTS,
    ingredients,
  };
}

function fetchIngredientFailed() {
  return {
    type: FETCH_INGREDIENTS_FAILED,
  };
}

function initIngredients() {
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

export {
  addIngredient,
  removeIngredient,
  setIngredients,
  fetchIngredientFailed,
  initIngredients,
};
