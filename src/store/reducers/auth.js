import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';
const {
  AUTH_START,
  AUTH_FAIL,
  AUTH_LOGOUT,
  AUTH_SUCCESS,
  SET_AUTH_REDIRECT_PATH,
} = actionTypes;

const initialState = {
  idToken: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: '/',
};

function authStart(state, action) {
  return updateObject(state, { error: null, loading: true });
}

function authFail(state, action) {
  return updateObject(state, { error: action.error, loading: false });
}

function authLogout(state, action) {
  return updateObject(state, { idToken: null, userId: null });
}

function authSuccess(state, action) {
  const { idToken, userId } = action;
  return updateObject(state, {
    loading: false,
    error: null,
    idToken,
    userId,
  });
}

function setAuthRedirectPath(state, action) {
  return updateObject(state, { authRedirectPath: action.path });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return authStart(state, action);
    case AUTH_FAIL:
      return authFail(state, action);
    case AUTH_LOGOUT:
      return authLogout(state, action);
    case AUTH_SUCCESS:
      return authSuccess(state, action);
    case SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
    default:
      return state;
  }
};

export default reducer;
