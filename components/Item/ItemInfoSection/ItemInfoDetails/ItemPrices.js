import React from 'react';
import { useSelector } from 'react-redux';

import {
  Prices,
  Price,
  PreviousPrice,
  ItemPricesContainer
}
  from '../../../../styles/ItemStyles/ItemInfoSectionStyles/ItemInfoDetailsStyles';

function ItemPrices({finalBagPrice}) {
  const bag = useSelector(state => state.bag.bagDetails.bag);

  if (!bag) return <h3>Loading...</h3>;

  return (
    <ItemPricesContainer>
      <Prices>
        <Price>Price: ${(Math.round(finalBagPrice) * 1e2) / 1e2}</Price>
        {bag.currentPrice !== bag.previousPrice && <PreviousPrice>${bag.previousPrice}</PreviousPrice>}
      </Prices>
    </ItemPricesContainer>
  );
}

export default ItemPrices;

