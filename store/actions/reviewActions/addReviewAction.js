import axios from 'axios';

import { ADD_REVIEW_START, ADD_REVIEW_SUCCESS, ADD_REVIEW_FAIL } from '../../actionTypes';
import { allReviewsApi, authorizationHeader } from '../../../common/api';
import { httpStartAction, httpFailAction } from '../../../common/utils/storeUtils';


const addReviewSuccess = (newReview) => ({
  type: ADD_REVIEW_SUCCESS,
  newReview
});

export const addReview = (newReview) => async (dispatch, getState) => {
  dispatch(httpStartAction(ADD_REVIEW_START));
  try {
    const token = getState().auth.token;
    const {data} = await axios.post(allReviewsApi, newReview, { headers: authorizationHeader(token)});
    dispatch(addReviewSuccess(data.data.data));
  } catch (error) {
    dispatch(httpFailAction(ADD_REVIEW_FAIL, error.message))
  }
};