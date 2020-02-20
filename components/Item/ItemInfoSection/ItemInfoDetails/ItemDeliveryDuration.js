import React from 'react';
import { useSelector } from 'react-redux';

import {
  S4,
  ItemDeliveryDurationContainer
}
  from '../../../../styles/ItemStyles/ItemInfoSectionStyles/ItemInfoDetailsStyles';

function ItemDeliveryDuration() {
  const bag = useSelector(state => state.bag.bagDetails.bag);

  if (!bag) return <h3>Loading...</h3>;

  return (
    <ItemDeliveryDurationContainer>
      <S4>Delivery duration:</S4>
      <div> {bag.deliveryDuration}</div>
    </ItemDeliveryDurationContainer>
  );
}

export default ItemDeliveryDuration;

