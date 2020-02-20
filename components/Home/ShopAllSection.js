import React from 'react';
import Router from 'next/router';

import {
  ContentContainer,
  Description,
  ImgWrapper,
  ShopAllButton,
  ShopAllSectionContainer,
  ShopAllSectionCoverAll,
  SolidColor
} from '../../styles/HomeStyles/ShopAllSectionStyles';
import { useDispatch } from 'react-redux';
import { setItemsListDefaultFilter } from '../../store/actions';
import TransitionSlideUp from '../../common/comps/TransitionSlideUp';

function ShopAllSection() {
  const dispatch = useDispatch();
  const onSetItemsListDefaultFilter = filter => dispatch(setItemsListDefaultFilter(filter));

  const handleShopAllClick = () => {
    onSetItemsListDefaultFilter({shopAll: true});
    Router.push({
      pathname: '/itemsPage',
      as: '/items',
      query: { shopAll: true },
    });
  };

  return (
    <ShopAllSectionCoverAll>
      <TransitionSlideUp>
        <ShopAllSectionContainer>
          <ContentContainer>
            <Description>
              Hundreds of best backpacks from well known brands available here just for you
            </Description>
            <ShopAllButton onClick={handleShopAllClick}>
              Shop All
            </ShopAllButton>
          </ContentContainer>
            <SolidColor/>
          <ImgWrapper>
            <img src="/img/posters/shopAll.jpg" alt=""/>
          </ImgWrapper>
        </ShopAllSectionContainer>
      </TransitionSlideUp>
    </ShopAllSectionCoverAll>
  );
}

export default ShopAllSection;
