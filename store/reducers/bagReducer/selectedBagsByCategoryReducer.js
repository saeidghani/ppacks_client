import {
  FETCH_SELECTED_BAGS_BY_CATEGORY_START,
  FETCH_SELECTED_BAGS_BY_CATEGORY_SUCCESS,
  FETCH_SELECTED_BAGS_BY_CATEGORY_FAIL
} from  '../../actionTypes';
import {updateObject, httpStart, httpFail} from '../../../common/utils/storeUtils';


const initialState = {
  bags : [],
  loading : false,
  error : null
};

const fetchSelectedBagsSuccess = (state, action) => {
  return updateObject( state, {
    bags : [...state.bags,
      {title: action.categoryTitle, id: action.categoryId, content: action.selectedBagsByCategory}],
    loading: false,
    error: null
  });
};

const selectedBagsByCategoryReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case FETCH_SELECTED_BAGS_BY_CATEGORY_START: return httpStart(state, action);
    case FETCH_SELECTED_BAGS_BY_CATEGORY_SUCCESS: return fetchSelectedBagsSuccess(state, action);
    case FETCH_SELECTED_BAGS_BY_CATEGORY_FAIL: return httpFail(state, action);
    default:
      return state;
  }
};

export default selectedBagsByCategoryReducer;