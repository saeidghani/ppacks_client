import React, { useState, useEffect } from 'react';
import Router from 'next/router';

import {
  GridContainer,
  GridHeader,
  CountSummary,
  Grid,
  GridItemWrapper,
  GridItem,
  Sort,
  SortBy
} from '../../styles/ItemsStyles/GridItemsSectionStyles';
import ItemCard from '../../common/comps/ItemCard';
import SortDropdown from '../../common/comps/SortDropdown';
import { useSelector } from 'react-redux';
import useDefaultFilter from '../../common/hooks/useDefaultFilter';
import {itemPage} from '../../common/urls';


function GridItemsSection({ onSort, items, minValue, maxValue }) {
  const defaultFilter = useSelector(state => state.itemsList.defaultFilter.filter);
  const [itemsCountSummary, setItemsCountSummary] = useState();
  const [itemsCountSummaryForSMWindowSize, setItemsCountSummaryForSMWindowSize] = useState();

  useEffect(() => {
    let itemsCountSummary;
    let itemsCountSummaryForSMWindowSize;
    if (maxValue) {
      itemsCountSummary = `${minValue + 1}_${maxValue} of ${items.length} results for ${itemsFilter.toLowerCase()}`;
      itemsCountSummaryForSMWindowSize = `${minValue + 1}_${maxValue} of ${items.length} results`;
    }
    setItemsCountSummary(itemsCountSummary);
    setItemsCountSummaryForSMWindowSize(itemsCountSummaryForSMWindowSize);
  }, [maxValue, items]);

  const { itemsFilter } = useDefaultFilter();

  const menuOptions = [
    { title: 'highest ratings quantity', path: 'ratingsQuantity', order: 'desc', key: '2' },
    { title: 'highest ratings average', path: 'ratingsAverage', order: 'desc', key: '1' },
    { title: 'most recent', path: 'createdAt', order: 'desc', key: '3' },
    { title: 'most expensive', path: 'currentPrice', order: 'desc', key: '4' },
    { title: 'cheapest', path: 'currentPrice', order: 'asc', key: '5' }
  ];

  const handleItemCardClick = (itemId) => {
    const {shopAll, shopOnSale, categoryId, brandId} = defaultFilter;
    const query = {itemId};
    if(shopAll) query.shopAll = shopAll;
    if(shopOnSale) query.shopOnSale = Boolean(shopOnSale);
    if(categoryId) query.categoryId = categoryId;
    if(brandId) query.brandId = brandId;
    Router.push({
      pathname: itemPage,
      as: '/item',
      query
    });
  };

  return (
    <GridContainer>
      <GridHeader>
        <CountSummary bgSize>{itemsCountSummary}</CountSummary>
        <CountSummary smSize>{itemsCountSummaryForSMWindowSize}</CountSummary>
        <Sort>
          <SortBy>Sort by:</SortBy>
          <SortDropdown menuOptions={menuOptions} onSort={onSort}/>
        </Sort>
      </GridHeader>
      <Grid>
        {items.slice(minValue, maxValue).map(bag =>
          <GridItemWrapper>
            <GridItem onClick={() => handleItemCardClick(bag._id)} key={bag._id}>
              <ItemCard item={bag} width={'23rem'}/>
            </GridItem>
          </GridItemWrapper>
        )}
      </Grid>
    </GridContainer>
  );
}

export default GridItemsSection;

