import React from 'react';
import { useSelector } from 'react-redux';

import {
  ItemRatingContainer
}
  from '../../../../styles/ItemStyles/ItemInfoSectionStyles/ItemInfoDetailsStyles';
import StyledRate from '../../../../common/styled/StyledRate';

function ItemRating() {
  const bag = useSelector(state => state.bag.bagDetails.bag);

  if (!bag) return <h3>Loading...</h3>;

  return (
    <ItemRatingContainer>
      <StyledRate allowHalf defaultValue={bag.ratingsAverage} disabled/>
      <span>{bag.ratingsQuantity}</span>
    </ItemRatingContainer>
  );
}

export default ItemRating;

