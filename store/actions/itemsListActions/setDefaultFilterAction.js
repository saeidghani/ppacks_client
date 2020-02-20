import {SET_ITEMS_LIST_DEFAULT_FILTER} from '../../actionTypes';

const setItemsListDefaultFilterAction = (filter) => ({
  type: SET_ITEMS_LIST_DEFAULT_FILTER,
  filter
});

export const setItemsListDefaultFilter = (filter) => dispatch => {
  dispatch(setItemsListDefaultFilterAction(filter));
};
