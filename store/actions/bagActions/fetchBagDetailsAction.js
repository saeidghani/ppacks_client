import axios from 'axios';

import {
  FETCH_BAG_Details_START,
  FETCH_BAG_Details_SUCCESS,
  FETCH_BAG_Details_FAIL
} from '../../actionTypes';
import { bagApi } from '../../../common/api';
import { httpStartAction, httpFailAction } from '../../../common/utils/storeUtils';


const fetchBagDetailsSuccess = (bagDetails) => ({
  type: FETCH_BAG_Details_SUCCESS,
  bagDetails
});

export const fetchBagDetails = (bagId) => async dispatch => {
  dispatch(httpStartAction(FETCH_BAG_Details_START));
  try {
    const { data } = await axios.get(bagApi(bagId));
    dispatch(fetchBagDetailsSuccess(data.data.data));
  } catch (error) {
    dispatch(httpFailAction(FETCH_BAG_Details_FAIL, error.message));
  }
};