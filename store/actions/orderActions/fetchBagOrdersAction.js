import axios from 'axios';

import {
  FETCH_BAG_ORDERS_START,
  FETCH_BAG_ORDERS_SUCCESS,
  FETCH_BAG_ORDERS_FAIL
} from '../../actionTypes';
import { orderApi } from '../../../common/api';
import { httpStartAction, httpFailAction } from '../../../common/utils/storeUtils';


const fetchBagOrdersSuccess = (orders) => ({
  type: FETCH_BAG_ORDERS_SUCCESS,
  orders
});

export const fetchBagOrders = (bagId) => async dispatch => {
  dispatch(httpStartAction(FETCH_BAG_ORDERS_START));
  try {
    const { data } = await axios.get(orderApi(bagId));
    dispatch(fetchBagOrdersSuccess(data.data.data));
  } catch (error) {
    dispatch(httpFailAction(FETCH_BAG_ORDERS_FAIL, error.message));
  }
};