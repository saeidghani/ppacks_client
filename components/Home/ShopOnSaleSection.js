import React from 'react';
import Router from 'next/router';
import { useDispatch } from 'react-redux';

import {
  ContentContainer,
  Description,
  ImgWrapper,
  ShopOnSaleButton,
  ShopOnSaleContainer,
  ShopOnSaleCoverAll,
  SolidColor
} from '../../styles/HomeStyles/ShopOnSaleSectionStyles';
import { setItemsListDefaultFilter } from '../../store/actions';
import TransitionSlideUp from '../../common/comps/TransitionSlideUp';

function ShopOnSaleSection() {
  const dispatch = useDispatch();
  const onSetItemsListDefaultFilter = filter => dispatch(setItemsListDefaultFilter(filter));

  const handleShopOnSaleClick = () => {
    onSetItemsListDefaultFilter({shopOnSale: true});
    Router.push({
      pathname: '/itemsPage',
      as: '/items',
      query: { shopOnSale: true },
    });
  };

  return (
    <ShopOnSaleCoverAll>
      <TransitionSlideUp>
        <ShopOnSaleContainer>
          <ImgWrapper>
            <img src="/img/posters/shopOnSale.jpg" alt=""/>
          </ImgWrapper>
          <ContentContainer>
            <Description>
              Best deals and discounts on all brands every week here in ppack
            </Description>
            <ShopOnSaleButton onClick={handleShopOnSaleClick}>
              Shop on sale products
            </ShopOnSaleButton>
          </ContentContainer>
          <SolidColor/>
        </ShopOnSaleContainer>
      </TransitionSlideUp>
    </ShopOnSaleCoverAll>
  );
}

export default ShopOnSaleSection;
