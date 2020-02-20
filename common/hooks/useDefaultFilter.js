import { useState } from 'react';
import { useSelector } from 'react-redux';
import { allBagsApi, allBagsByBrandApi, allBagsByCategoryAndBrandApi, allBagsByCategoryApi } from '../../common/api';
import { findBrandById, findCategoryById } from '../../common/utils/findById';

export default function useDefaultFilter() {
  const defaultFilter = useSelector(state => state.itemsList.defaultFilter.filter);
  const shopOnSale = defaultFilter && defaultFilter.shopOnSale;
  const categoryId = defaultFilter && defaultFilter.categoryId;
  const brandId = defaultFilter && defaultFilter.brandId;

  let apiEndpoint = allBagsApi;
  let itemsFilter = 'All bags';

  if (shopOnSale) {
    apiEndpoint = allBagsApi;
    itemsFilter = 'Shop on sale bags';
  }

  if (categoryId) {
    apiEndpoint = allBagsByCategoryApi(categoryId);
    const categoryName = findCategoryById(categoryId);
    itemsFilter = `${categoryName} bags`;
  }
  if (brandId) {
    apiEndpoint = allBagsByBrandApi(brandId);
    const brandFilter = findBrandById(brandId);
    itemsFilter = `${brandFilter} bags`;
  }
  if (categoryId && brandId) {
    apiEndpoint = allBagsByCategoryAndBrandApi(categoryId, brandId);
    const categoryFilter = findCategoryById(categoryId).toLowerCase();
    const brandFilter = findBrandById(brandId);
    itemsFilter = `${brandFilter} ${categoryFilter} bags`;
  }

  return { apiEndpoint, itemsFilter };
}