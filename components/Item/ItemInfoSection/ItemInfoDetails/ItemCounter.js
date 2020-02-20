import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  ItemCounterContainer,
  ItemCountCounter
}
  from '../../../../styles/ItemStyles/ItemInfoSectionStyles/ItemInfoDetailsStyles';

function ItemCounter({itemCount, onIncreaseItemCountClick, onDecreaseItemCountClick}) {
  const bag = useSelector(state => state.bag.bagDetails.bag);

  if (!bag) return <h3>Loading...</h3>;

  return (
    <ItemCounterContainer>
      <ItemCountCounter onClick={onDecreaseItemCountClick}>-</ItemCountCounter>
      <span>{itemCount}</span>
      <ItemCountCounter onClick={onIncreaseItemCountClick}>+</ItemCountCounter>
    </ItemCounterContainer>
  );
}

export default ItemCounter;

