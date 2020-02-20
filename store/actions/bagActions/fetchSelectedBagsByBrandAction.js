import axios from 'axios';
import slugify from 'slugify';

import {
  FETCH_SELECTED_BAGS_BY_BRAND_START,
  FETCH_SELECTED_BAGS_BY_BRAND_SUCCESS,
  FETCH_SELECTED_BAGS_BY_BRAND_FAIL
} from '../../actionTypes';
import { selectedBagsByBrandApi } from '../../../common/api';
import { httpStartAction, httpFailAction } from '../../../common/utils/storeUtils';


const fetchSelectedBagsByBrandSuccess = (brandTitle, brandSlug, brandId, selectedBagsByBrand) => ({
  type: FETCH_SELECTED_BAGS_BY_BRAND_SUCCESS,
  brandTitle,
  brandSlug,
  brandId,
  selectedBagsByBrand
});

export const fetchSelectedBagsByBrand = (brand) => async dispatch => {
  const {title, id} = brand;
  dispatch(httpStartAction(FETCH_SELECTED_BAGS_BY_BRAND_START));
  try {
    const { data } = await axios.get(selectedBagsByBrandApi(id));
    const slug = slugify(title, { lower: true });
    dispatch(fetchSelectedBagsByBrandSuccess(title, slug, id, data.data.data));
  } catch (error) {
    dispatch(httpFailAction(FETCH_SELECTED_BAGS_BY_BRAND_FAIL, error.message));
  }
};