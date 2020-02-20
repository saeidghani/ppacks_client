import { FETCH_BAG_REVIEWS_START, FETCH_BAG_REVIEWS_SUCCESS, FETCH_BAG_REVIEWS_FAIL } from '../../actionTypes';
import {updateObject, httpStart, httpFail} from '../../../common/utils/storeUtils';


const initialState = {
  reviews: [],
  error: null,
  loading: false
};


const fetchBagReviewsSuccess = (state, action) => {
  return updateObject( state, {
    reviews: action.bagReviews,
    error: null,
    loading: false
  } );
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case FETCH_BAG_REVIEWS_START: return httpStart(state, action);
    case FETCH_BAG_REVIEWS_SUCCESS: return fetchBagReviewsSuccess(state, action);
    case FETCH_BAG_REVIEWS_FAIL: return httpFail(state, action);
    default:
      return state;
  }
};

export default reducer;