import React from 'react';
import { useSelector } from 'react-redux';

import {
  S4,
  ItemProtectionTypesContainer,
  ProtectionTypeButtonWrapper,
  ProtectionTypeButton
}
  from '../../../../styles/ItemStyles/ItemInfoSectionStyles/ItemInfoDetailsStyles';

function ItemProtectionTypes({ selectedProtectionType, onSelectedProtectionTypeClick }) {
  const bag = useSelector(state => state.bag.bagDetails.bag);

  if (!bag) return <h3>Loading...</h3>;

  return (
    <ItemProtectionTypesContainer>
      <S4>Protection Types:</S4>
      <ProtectionTypeButtonWrapper>
        {bag.protectionTypes.map(type =>
          <ProtectionTypeButton selected={selectedProtectionType === type}
                                onClick={() => onSelectedProtectionTypeClick(type)}
                                key={type.title}
          >
            {type.title} <span> - </span> {type.additionalPrice}
          </ProtectionTypeButton>
        )}
      </ProtectionTypeButtonWrapper>
    </ItemProtectionTypesContainer>
  );
}

export default ItemProtectionTypes;

