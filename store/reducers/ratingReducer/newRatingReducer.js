import { ADD_RATING_START, ADD_RATING_SUCCESS, ADD_RATING_FAIL } from '../../actionTypes';
import {updateObject, httpStart, httpFail} from '../../../common/utils/storeUtils';


const initialState = {
  rating: null,
  error: null,
  loading: false
};


const addRatingSuccess = (state, action) => {
  return updateObject( state, {
    rating: action.newRating,
    error: null,
    loading: false
  } );
};

const newRatingReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case ADD_RATING_START: return httpStart(state, action);
    case ADD_RATING_SUCCESS: return addRatingSuccess(state, action);
    case ADD_RATING_FAIL: return httpFail(state, action);
    default:
      return state;
  }
};

export default newRatingReducer;