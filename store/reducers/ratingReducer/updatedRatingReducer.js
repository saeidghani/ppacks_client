import { UPDATE_RATING_START, UPDATE_RATING_SUCCESS, UPDATE_RATING_FAIL, RESET_UPDATE_RATING } from '../../actionTypes';
import {updateObject, httpStart, httpFail} from '../../../common/utils/storeUtils';


const initialState = {
  rating: null,
  error: null,
  loading: false
};


const updateRatingSuccess = (state, action) => {
  return updateObject( state, {
    rating: action.updatedRating,
    error: null,
    loading: false
  } );
};

export const resetUpdateRating = (state, action) => {
  return updateObject( state, {
    rating: null,
    error: null,
    loading: false
  } );
};

const updatedRatingReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case UPDATE_RATING_START: return httpStart(state, action);
    case UPDATE_RATING_SUCCESS: return updateRatingSuccess(state, action);
    case UPDATE_RATING_FAIL: return httpFail(state, action);
    default:
      return state;
  }
};

export default updatedRatingReducer;