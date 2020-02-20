import axios from 'axios';

import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT, SET_AUTH_REDIRECT_PATH } from '../../actionTypes';
import { signInApi, signUpApi } from '../../../common/api';
import { httpStartAction, httpFailAction } from '../../../common/utils/storeUtils';


export const authSuccess = (user, token) => {
  return {
    type: AUTH_SUCCESS,
    user,
    token
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('user');
  return {
    type: AUTH_LOGOUT
  };
};

export const checkAuthTimeout = (expirationTime) => dispatch => {
  setTimeout(() => {
    dispatch(logout());
  }, expirationTime * 1000);
};


export const auth = (authDetails) => async dispatch => {
  dispatch(httpStartAction(AUTH_START));
  const { name, email, password, passwordConfirm, isSignup } = authDetails;
  const authData = {
    email,
    password
  };
  let authApi = signInApi;
  if (isSignup) {
    authData.name = name;
    authData.passwordConfirm = passwordConfirm;
    authApi = signUpApi;
  }
  const expiresIn = 36000000;
  try {
    const { data: result } = await axios.post(authApi, authData);
    const expirationDate = new Date(new Date().getTime() + expiresIn);
    const user = result.data.user;
    const token = result.token;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    localStorage.setItem('expirationDate', expirationDate);
    dispatch(authSuccess(user, token));
    dispatch(checkAuthTimeout(expiresIn));
  } catch (error) {
    dispatch(httpFailAction(AUTH_FAIL, error.message));
  }
};

  export const setAuthRedirectPath = (path) => ({
    type: SET_AUTH_REDIRECT_PATH,
    path
  });

  export const checkAuthState = () => dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const user = localStorage.getItem('user');
        const userObj = JSON.parse(user);
        dispatch(authSuccess(userObj, token));
        dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
      }
    }
  };
