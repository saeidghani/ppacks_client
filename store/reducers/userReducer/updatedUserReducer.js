import { UPDATE_USER_START, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL } from '../../actionTypes';
import {updateObject, httpStart, httpFail} from '../../../common/utils/storeUtils';


const initialState = {
  user: null,
  error: null,
  loading: false
};


const updateUserSuccess = (state, action) => {
  return updateObject( state, {
    user: action.updatedUser,
    error: null,
    loading: false
  } );
};

const updatedUserReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case UPDATE_USER_START: return httpStart(state, action);
    case UPDATE_USER_SUCCESS: return updateUserSuccess(state, action);
    case UPDATE_USER_FAIL: return httpFail(state, action);
    default:
      return state;
  }
};

export default updatedUserReducer;