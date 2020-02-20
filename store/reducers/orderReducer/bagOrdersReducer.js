import {
  FETCH_BAG_ORDERS_START,
  FETCH_BAG_ORDERS_SUCCESS,
  FETCH_BAG_ORDERS_FAIL
} from '../../actionTypes';
import {updateObject, httpStart, httpFail} from '../../../common/utils/storeUtils';


const initialState = {
  orders: null,
  error: null,
  loading: false
};

const fetchBagOrdersSuccess = (state, action) => {
  return updateObject( state, {
    orders: action.orders,
    error: null,
    loading: false
  });
};

const bagOrdersReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case FETCH_BAG_ORDERS_START: return httpStart(state, action);
    case FETCH_BAG_ORDERS_SUCCESS: return fetchBagOrdersSuccess(state, action);
    case FETCH_BAG_ORDERS_FAIL: return httpFail(state, action);
    default:
      return state;
  }
};

export default bagOrdersReducer;