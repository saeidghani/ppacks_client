import { ADD_ORDER_START, ADD_ORDER_SUCCESS, ADD_ORDER_FAIL } from '../../actionTypes';
import {updateObject, httpStart, httpFail} from '../../../common/utils/storeUtils';


const initialState = {
  order: null,
  error: null,
  loading: false
};


const addOrderSuccess = (state, action) => {
  return updateObject( state, {
    order: action.newOrder,
    error: null,
    loading: false
  } );
};

const newOrderReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case ADD_ORDER_START: return httpStart(state, action);
    case ADD_ORDER_SUCCESS: return addOrderSuccess(state, action);
    case ADD_ORDER_FAIL: return httpFail(state, action);
    default:
      return state;
  }
};

export default newOrderReducer;