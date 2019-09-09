import axios from 'axios';
import { put } from 'redux-saga/effects';
import { setIngredients, fetchIngredientFailed } from '../actions/index';

function* initIngredientsSaga(action) {
  try {
    const response = yield axios.get(
      'https://react-burger-builder-d296e.firebaseio.com/ingredients.json',
    );
    yield put(setIngredients(response.data));
  } catch (error) {
    yield put(fetchIngredientFailed());
  }
}

export { initIngredientsSaga };
