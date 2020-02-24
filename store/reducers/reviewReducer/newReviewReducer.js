import { ADD_REVIEW_START, ADD_REVIEW_SUCCESS, ADD_REVIEW_FAIL, RESET_ADD_REVIEW } from '../../actionTypes';
import {updateObject, httpStart, httpFail} from '../../../common/utils/storeUtils';


const initialState = {
  review: null,
  error: null,
  loading: false
};


const addReviewSuccess = (state, action) => {
  return updateObject( state, {
    review: action.newReview,
    error: null,
    loading: false
  });
};

export const resetAddReview = (state, action) => {
  return updateObject( state, {
    review: null,
    error: null,
    loading: false
  });
};

const newReviewReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case ADD_REVIEW_START: return httpStart(state, action);
    case ADD_REVIEW_SUCCESS: return addReviewSuccess(state, action);
    case ADD_REVIEW_FAIL: return httpFail(state, action);
    case RESET_ADD_REVIEW: return resetAddReview(state, action);
    default:
      return state;
  }
};

export default newReviewReducer;