import React from 'react';

import {
  AddToCartButton
} from '../../../../styles/ItemStyles/ItemInfoSectionStyles/ItemInfoDetailsStyles';

function AddToCart({onAddToCartClick}) {

  return (
    <AddToCartButton onClick={onAddToCartClick}>
      ADD TO Cart
    </AddToCartButton>
  );
}

export default AddToCart;

