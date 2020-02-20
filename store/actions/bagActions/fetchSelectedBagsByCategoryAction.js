import axios from 'axios';

import {
  FETCH_SELECTED_BAGS_BY_CATEGORY_START,
  FETCH_SELECTED_BAGS_BY_CATEGORY_SUCCESS,
  FETCH_SELECTED_BAGS_BY_CATEGORY_FAIL
} from '../../actionTypes';
import { selectedBagsByCategoryApi } from '../../../common/api';
import { httpStartAction, httpFailAction } from '../../../common/utils/storeUtils';


const fetchSelectedBagsByCategorySuccess = (categoryTitle, categoryId, selectedBagsByCategory) => ({
  type: FETCH_SELECTED_BAGS_BY_CATEGORY_SUCCESS,
  categoryTitle,
  categoryId,
  selectedBagsByCategory
});

export const fetchSelectedBagsByCategory = (category) => async dispatch => {
  const {title, id} = category;
  dispatch(httpStartAction(FETCH_SELECTED_BAGS_BY_CATEGORY_START));
  try {
    const { data } = await axios.get(selectedBagsByCategoryApi(id));
    dispatch(fetchSelectedBagsByCategorySuccess(title, id, data.data.data));
  } catch (error) {
    dispatch(httpFailAction(FETCH_SELECTED_BAGS_BY_CATEGORY_FAIL, error.message));
  }
};
