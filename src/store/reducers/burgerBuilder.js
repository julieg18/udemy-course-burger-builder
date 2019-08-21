import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';
const {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INGREDIENTS,
  FETCH_INGREDIENTS_FAILED,
} = actionTypes;

const initialState = {
  ingredients: null,
  totalPrice: 2,
  error: false,
};

const INGREDIENT_PRICES = {
  salad: 0.1,
  cheese: 0.2,
  meat: 0.75,
  veggieBurgerMeat: 0.75,
  bacon: 0.3,
  redOnion: 0.2,
  pickles: 0.1,
};

function addIngredient(state, action) {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
  };
  return updateObject(state, updatedState);
}

function removeIngredient(state, action) {
  const updatedIng = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
  };
  const updatedIngs = updateObject(state.ingredients, updatedIng);
  const updatedSt = {
    ingredients: updatedIngs,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
  };
  return updateObject(state, updatedSt);
}

function setIngredients(state, action) {
  return updateObject(state, {
    ingredients: action.ingredients,
    totalPrice: 2,
    error: false,
  });
}

function fetchIngredientsFailed(state, action) {
  return updateObject(state, { error: true });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return addIngredient(state, action);
    case REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case SET_INGREDIENTS:
      return setIngredients(state, action);
    case FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
