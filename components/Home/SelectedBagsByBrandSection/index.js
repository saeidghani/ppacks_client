import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

import {
  ItemCardWrapper,
  SelectedBagsByBrandContainer,
  SelectedBagsByBrandCoverAll,
  StyledTabPane,
  Title
} from '../../../styles/HomeStyles/SelectedBagsByBrandSectionStyles';
import { StyledTabs } from '../../../common/styled/StyledTabs';
import TabPaneContent from './TabPaneContent';
import ItemCard from '../../../common/comps/ItemCard';
import { setItemsListDefaultFilter } from '../../../store/actions';
import TransitionSlideUp from '../../../common/comps/TransitionSlideUp';
import useWindowSize from '../../../common/hooks/useWindowSize';
import {itemPage} from '../../../common/urls';


function SelectedBagsByBrandSection() {
  const dispatch = useDispatch();
  const onSetItemsListDefaultFilter = filter => dispatch(setItemsListDefaultFilter(filter));
  const selectedBagsByBrand = useSelector(state => state.bag.selectedBagsByBrand.bags);

  const handleItemCardClick = (brandId, itemId) => {
    onSetItemsListDefaultFilter({ brandId, itemId });
    Router.push({
      pathname: itemPage,
      as: '/item',
      query: { brandId, itemId },
    });
  };


  const selectItems = (brandId, brandbags) => brandbags.map(bag =>
    <ItemCardWrapper key={bag._id} onClick={() => handleItemCardClick(brandId, bag._id)}>
      <ItemCard item={bag} />
    </ItemCardWrapper>);

  const tabsContent = selectedBagsByBrand.map(brand => ({
      title: brand.title,
      brandId: brand.id,
      poster: `/img/posters/brands/${brand.slug}.jpg`,
      selectedItems: selectItems(brand.id, brand.content)
    })
  );

  return (
    <SelectedBagsByBrandCoverAll>
      <TransitionSlideUp>
        <SelectedBagsByBrandContainer>
          <Title>All Brands</Title>
          <StyledTabs defaultActiveKey="0">
            {tabsContent.map((tab, index) => (
              <StyledTabPane tab={tab.title} key={index}>
                <TabPaneContent tabItems={tab}/>
              </StyledTabPane>
            ))}
          </StyledTabs>
        </SelectedBagsByBrandContainer>
      </TransitionSlideUp>
    </SelectedBagsByBrandCoverAll>
  );
}

export default SelectedBagsByBrandSection;
