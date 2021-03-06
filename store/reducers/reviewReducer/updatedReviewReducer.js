import { UPDATE_REVIEW_START, UPDATE_REVIEW_SUCCESS, UPDATE_REVIEW_FAIL, RESET_UPDATE_REVIEW } from '../../actionTypes';
import {updateObject, httpStart, httpFail} from '../../../common/utils/storeUtils';


const initialState = {
  review: null,
  error: null,
  loading: false
};


const updateReviewSuccess = (state, action) => {
  return updateObject( state, {
    review: action.updatedReview,
    error: null,
    loading: false
  } );
};

const resetUpdateReview = (state, action) => {
  return updateObject( state, {
    review: null,
    error: null,
    loading: false
  } );
};

const updatedReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case UPDATE_REVIEW_START: return httpStart(state, action);
    case UPDATE_REVIEW_SUCCESS: return updateReviewSuccess(state, action);
    case UPDATE_REVIEW_FAIL: return httpFail(state, action);
    case RESET_UPDATE_REVIEW: return resetUpdateReview(state, action);
    default:
      return state;
  }
};

export default updatedReducer;