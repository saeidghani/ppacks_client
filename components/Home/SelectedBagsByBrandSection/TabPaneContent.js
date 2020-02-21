import React from 'react';
import Router from 'next/router';
import { useDispatch } from 'react-redux';

import {
  ItemsContainer,
  PosterWrapper,
  SeeAllButton,
  SeeAllButtonWrapper,
  SelectedTabPaneContainer
} from '../../../styles/HomeStyles/SelectedBagsByBrandSectionStyles';
import { setItemsListDefaultFilter } from '../../../store/actions';
import { findFitBrandColor } from '../../../common/utils/findFitBrandColor';
import {itemsPage} from '../../../common/urls';


function TabPaneContent({ tabItems }) {
  const dispatch = useDispatch();
  const onSetItemsListDefaultFilter = filter => dispatch(setItemsListDefaultFilter(filter));

  const handleSeeAllButtonClick = () => {
    const brandId = tabItems.brandId;
    onSetItemsListDefaultFilter({ brandId });
    Router.push({ pathname: itemsPage, query: { brandId } });
  };

  return (
    <SelectedTabPaneContainer>
      <PosterWrapper>
        <img src={tabItems.poster} alt=""/>
        <SeeAllButtonWrapper>
          <SeeAllButton onClick={handleSeeAllButtonClick} color={findFitBrandColor(tabItems.brandId)}>
            see all {tabItems.title} bags
          </SeeAllButton>
        </SeeAllButtonWrapper>
      </PosterWrapper>
      <ItemsContainer>{tabItems.selectedItems}</ItemsContainer>
    </SelectedTabPaneContainer>
  );
}

export default TabPaneContent;
