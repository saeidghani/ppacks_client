import axios from 'axios';

import { UPDATE_RATING_START, UPDATE_RATING_SUCCESS, UPDATE_RATING_FAIL, RESET_UPDATE_RATING } from '../../actionTypes';
import { reviewApi, authorizationHeader } from '../../../common/api';
import { httpStartAction, httpFailAction } from '../../../common/utils/storeUtils';

const updateRatingSuccess = (updatedRating) => ({
  type: UPDATE_RATING_SUCCESS,
  updatedRating
});

export const resetUpdateRating = () => ({
  type: RESET_UPDATE_RATING
});

export const updateRating = (reviewId, updatedRating) => async (dispatch, getState) => {
  dispatch(httpStartAction(UPDATE_RATING_START));
  try {
    const token = getState().auth.token;
    const {data} = await axios.patch(reviewApi(reviewId), updatedRating, { headers: authorizationHeader(token)});
    dispatch(updateRatingSuccess(data.data.data));
  } catch (error) {
    dispatch(httpFailAction(UPDATE_RATING_FAIL, error.message))
  }
};