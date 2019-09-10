const {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INGREDIENTS,
  FETCH_INGREDIENTS_FAILED,
  INIT_INGREDIENTS,
} = './actionTypes';

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
  return {
    type: INIT_INGREDIENTS,
  };
}

export {
  addIngredient,
  removeIngredient,
  setIngredients,
  fetchIngredientFailed,
  initIngredients,
};
