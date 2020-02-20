import axios from 'axios';

import { ADD_RATING_START, ADD_RATING_SUCCESS, ADD_RATING_FAIL } from '../../actionTypes';
import { allReviewsApi, authorizationHeader } from '../../../common/api';
import { httpStartAction, httpFailAction } from '../../../common/utils/storeUtils';


const addRatingSuccess = (newRating) => ({
  type: ADD_RATING_SUCCESS,
  newRating
});

export const addRating = (newRating) => async (dispatch, getState) => {
  dispatch(httpStartAction(ADD_RATING_START));
  try {
    const token = getState().auth.token;
    const {data} = await axios.post(allReviewsApi, newRating, { headers: authorizationHeader(token)});
    dispatch(addRatingSuccess(data.data.data));
  } catch (error) {
    dispatch(httpFailAction(ADD_RATING_FAIL, error.message))
  }
};