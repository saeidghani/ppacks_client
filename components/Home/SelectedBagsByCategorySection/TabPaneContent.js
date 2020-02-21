import React from 'react';
import Router from 'next/router';
import { useDispatch } from 'react-redux';

import { ItemCardWrapper, TabPaneContainer } from '../../../styles/HomeStyles/SelectedBagsByCategorySectionStyles';
import ItemCard from '../../../common/comps/ItemCard';
import { setItemsListDefaultFilter } from '../../../store/actions';
import {itemPage} from '../../../common/urls';


function TabPaneContent({ categoryId, items }) {
  const dispatch = useDispatch();
  const onSetItemsListDefaultFilter = filter => dispatch(setItemsListDefaultFilter(filter));

  const handleItemCardClick = (itemId) => {
    Router.push({
      pathname: itemPage,
      as: '/item',
      query: { categoryId, itemId },
    });
  };

  return (
    <TabPaneContainer>
      {items.map(item => (
        <ItemCardWrapper onClick={() => handleItemCardClick(item._id)} key={item._id}>
          <ItemCard item={item} />
        </ItemCardWrapper>
      ))}
    </TabPaneContainer>
  );
}

export default TabPaneContent;
