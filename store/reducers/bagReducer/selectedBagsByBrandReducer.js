import {
  FETCH_SELECTED_BAGS_BY_BRAND_START,
  FETCH_SELECTED_BAGS_BY_BRAND_SUCCESS,
  FETCH_SELECTED_BAGS_BY_BRAND_FAIL
} from '../../actionTypes';
import {updateObject, httpStart, httpFail} from '../../../common/utils/storeUtils';

const initialState = {
  bags: [],
  loading: false,
  error: null,
};

const fetchSelectedBagsSuccess = (state, action) => {
  return updateObject( state, {
    bags: [...state.bags,
      {title: action.brandTitle, slug: action.brandSlug, id: action.brandId,  content: action.selectedBagsByBrand}],
    loading: false,
    error: null
  });
};

const selectedBagsByBrandReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case FETCH_SELECTED_BAGS_BY_BRAND_START: return httpStart(state, action);
    case FETCH_SELECTED_BAGS_BY_BRAND_SUCCESS: return fetchSelectedBagsSuccess(state, action);
    case FETCH_SELECTED_BAGS_BY_BRAND_FAIL: return httpFail(state, action);
    default:
      return state;
  }
};

export default selectedBagsByBrandReducer;