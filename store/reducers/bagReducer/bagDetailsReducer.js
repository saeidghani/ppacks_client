import {
  FETCH_BAG_Details_START,
  FETCH_BAG_Details_SUCCESS,
  FETCH_BAG_Details_FAIL
} from '../../actionTypes';
import {updateObject, httpStart, httpFail} from '../../../common/utils/storeUtils';


const initialState = {
  bag: null,
  error: null,
  loading: false
};

const fetchBagDetailsSuccess = (state, action) => {
  return updateObject( state, {
    bag: action.bagDetails,
    error: null,
    loading: false
  });
};

const bagDetailsReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case FETCH_BAG_Details_START: return httpStart(state, action);
    case FETCH_BAG_Details_SUCCESS: return fetchBagDetailsSuccess(state, action);
    case FETCH_BAG_Details_FAIL: return httpFail(state, action);
    default:
      return state;
  }
};

export default bagDetailsReducer;