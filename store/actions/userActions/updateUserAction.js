import axios from 'axios';

import { UPDATE_USER_START, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL } from '../../actionTypes';
import { authorizationHeader, updateUserApi } from '../../../common/api';
import { httpStartAction, httpFailAction } from '../../../common/utils/storeUtils';
import {authSuccess} from './authActions';


const updateUserSuccess = (updatedUser) => {
  return {
    type: UPDATE_USER_SUCCESS,
    updatedUser
  }
};

export const updateUser = (updatedUser) => async (dispatch, getState) => {
  dispatch(httpStartAction(UPDATE_USER_START));
  try {
    const token = getState().auth.token;
    const {data} = await axios.patch(updateUserApi, updatedUser, {headers: authorizationHeader(token)});
    const user = data.data.user;
    dispatch(updateUserSuccess(user));
    dispatch(authSuccess(user, token));
    localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    dispatch(httpFailAction(UPDATE_USER_FAIL, error.message));
  }
};