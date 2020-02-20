import {
  SET_ITEMS_LIST_DEFAULT_FILTER
} from '../../actionTypes';
import { updateObject } from '../../../common/utils/storeUtils';

const initialState = {
  filter: ''
};

const setDefaultFilter = (state, action) => {
  return updateObject(state, {
    filter: action.filter
  });
};

const defaultFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS_LIST_DEFAULT_FILTER:
      return setDefaultFilter(state, action);
    default:
      return state;
  }
};

export default defaultFilterReducer;