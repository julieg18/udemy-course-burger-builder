import * as actionTypes from './actions';

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
    veggieBurgerMeat: 0,
    redOnion: 0,
    pickles: 0,
  },
  totalPrice: 1,
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
          totalPrice:
            state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        },
      };
    default:
      return state;
  }
};

export default reducer;
