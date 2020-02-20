import React from 'react';
import { useSelector } from 'react-redux';

import {
  S4,
  ItemSizesContainer,
  Size,
}
  from '../../../../styles/ItemStyles/ItemInfoSectionStyles/ItemInfoDetailsStyles';


function ItemSizes({selectedSize, onSelectedSizeClick}) {
  const bag = useSelector(state => state.bag.bagDetails.bag);

  if (!bag) return <h3>Loading...</h3>;

  return (
    <ItemSizesContainer>
      <S4>Sizes:</S4>
      {bag.sizes.map((size, index) =>
        <Size selected={selectedSize === size} onClick={() => onSelectedSizeClick(size)} key={index}>
          {size}
        </Size>
      )}
    </ItemSizesContainer>
  );
}

export default ItemSizes;

