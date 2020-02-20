import axios from 'axios';

import { UPDATE_REVIEW_START, UPDATE_REVIEW_SUCCESS, UPDATE_REVIEW_FAIL } from '../../actionTypes';
import { reviewApi, authorizationHeader } from '../../../common/api';
import { httpStartAction, httpFailAction } from '../../../common/utils/storeUtils';


const updateReviewSuccess = (updatedReview) => ({
  type: UPDATE_REVIEW_SUCCESS,
  updatedReview
});

export const updateReview = (reviewId, updatedReview) => async (dispatch, getState) => {
  console.log(updatedReview);
  dispatch(httpStartAction(UPDATE_REVIEW_START));
  try {
    const token = getState().auth.token;
    const {data} = await axios.patch(reviewApi(reviewId), updatedReview, {headers: authorizationHeader(token)});
    dispatch(updateReviewSuccess(data.data.data));
  } catch (error) {
    dispatch(httpFailAction(UPDATE_REVIEW_FAIL, error.message))
  }
};