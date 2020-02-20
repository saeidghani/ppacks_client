import {
  FETCH_ALL_BAGS_START,
  FETCH_ALL_BAGS_SUCCESS,
  FETCH_ALL_BAGS_FAIL
} from '../../actionTypes';
import {updateObject, httpStart, httpFail} from '../../../common/utils/storeUtils';

const initialState = {
  bags: [],
  loading: false,
  error: null,
};

const fetchAllBagsSuccess = (state, action) => {
  return updateObject( state, {
    bags: [...action.allBags],
    loading: false,
    error: null
  });
};

const allBagsReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case FETCH_ALL_BAGS_START: return httpStart(state, action);
    case FETCH_ALL_BAGS_SUCCESS: return fetchAllBagsSuccess(state, action);
    case FETCH_ALL_BAGS_FAIL: return httpFail(state, action);
    default:
      return state;
  }
};

export default allBagsReducer;