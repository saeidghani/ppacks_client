import {AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT, SET_AUTH_REDIRECT_PATH} from '../../actionTypes';
import {updateObject, httpStart, httpFail} from '../../../common/utils/storeUtils';


const initialState = {
  token: null,
  user: null,
  error: null,
  loading: false,
  authRedirectPath: '/'
};

const authSuccess = (state, action) => {
  return updateObject( state, {
    user: action.user,
    token: action.token,
    error: null,
    loading: false
  } );
};

const authLogout = (state, action) => {
  return updateObject(state, { token: null, user: null });
};

const setAuthRedirectPath = (state, action) => {
  return updateObject(state, { authRedirectPath: action.path })
}

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case AUTH_START: return httpStart(state, action);
    case AUTH_SUCCESS: return authSuccess(state, action);
    case AUTH_FAIL: return httpFail(state, action);
    case AUTH_LOGOUT: return authLogout(state, action);
    case SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
    default:
      return state;
  }
};

export default reducer;