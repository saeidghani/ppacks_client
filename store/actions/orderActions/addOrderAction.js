import axios from 'axios';

import { ADD_ORDER_START, ADD_ORDER_SUCCESS, ADD_ORDER_FAIL } from '../../actionTypes';
import { allOrdersApi, authorizationHeader } from '../../../common/api';
import { httpStartAction, httpFailAction } from '../../../common/utils/storeUtils';


const addOrderSuccess = (newOrder) => ({
  type: ADD_ORDER_SUCCESS,
  newOrder
});

export const addOrder = (newOrder) => async (dispatch, getState) => {
  dispatch(httpStartAction(ADD_ORDER_START));
  try {
    const token = getState().auth.token;
    const {data} = await axios.post(allOrdersApi, newOrder, { headers: authorizationHeader(token)});
    dispatch(addOrderSuccess(data.data.data));
  } catch (error) {
    dispatch(httpFailAction(ADD_ORDER_FAIL, error.message))
  }
};