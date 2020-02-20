import React from 'react';

import { ItemInfoContainer } from '../../../styles/ItemStyles/ItemInfoSectionStyles';
import ItemInfoImages from './ItemInfoImages';
import ItemInfoDetails from './ItemInfoDetails';

function ItemInfoSection() {

  return (
    <ItemInfoContainer>
      <ItemInfoImages />
      <ItemInfoDetails/>
    </ItemInfoContainer>
  );
}

export default ItemInfoSection;

