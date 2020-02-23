import axios from 'axios';

import { FETCH_BAG_REVIEWS_START, FETCH_BAG_REVIEWS_SUCCESS, FETCH_BAG_REVIEWS_FAIL, REMOVE_PREV_BAG_REVIEWS } from '../../actionTypes';
import { getReviewsByBagIdApi } from '../../../common/api';
import { httpStartAction, httpFailAction } from '../../../common/utils/storeUtils';


const fetchBagReviewsSuccess = (bagReviews) => ({
  type: FETCH_BAG_REVIEWS_SUCCESS,
  bagReviews
});

export const removePrevBagReviews = () => ({
  type: REMOVE_PREV_BAG_REVIEWS
});

export const fetchBagReviews = (bagId) => async dispatch => {
  dispatch(httpStartAction(FETCH_BAG_REVIEWS_START));
  try {
    const {data} = await axios.get(getReviewsByBagIdApi(bagId));
    dispatch(fetchBagReviewsSuccess(data.data.data));
  } catch (error) {
    dispatch(httpFailAction(FETCH_BAG_REVIEWS_FAIL, error.message))
  }
};