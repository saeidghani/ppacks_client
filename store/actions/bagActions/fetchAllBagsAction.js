import axios from 'axios';

import {
  FETCH_ALL_BAGS_START,
  FETCH_ALL_BAGS_SUCCESS,
  FETCH_ALL_BAGS_FAIL
} from '../../actionTypes';
import { allBagsApi } from '../../../common/api';
import { httpStartAction, httpFailAction } from '../../../common/utils/storeUtils';


const fetchAllBagsSuccess = (allBags) => ({
  type: FETCH_ALL_BAGS_SUCCESS,
  allBags
});

export const fetchAllBags = () => async dispatch => {
  dispatch(httpStartAction(FETCH_ALL_BAGS_START));
  try {
    const { data } = await axios.get(allBagsApi);
    dispatch(fetchAllBagsSuccess(data.data.data));
  } catch (error) {
    dispatch(httpFailAction(FETCH_ALL_BAGS_FAIL, error.message));
  }
};