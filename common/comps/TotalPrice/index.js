import React from 'react';
import { useSelector } from 'react-redux';

import {
  TotalPriceContainer,
  TotalPriceWrapper,
  TotalPriceNum
} from './TotalPriceStyles';
import useTotalPrice from '../../hooks/useTotalPrice';


function TotalPrice({borderTop, hidden}) {
  const bagsInCart = useSelector(state => state.cart.cartItems.bags);
  const totalPriceNumber = useTotalPrice(bagsInCart);

  return (
    <TotalPriceContainer borderTop={borderTop} hidden={hidden}>
      <TotalPriceWrapper>total price: <TotalPriceNum>{totalPriceNumber} $</TotalPriceNum></TotalPriceWrapper>
    </TotalPriceContainer>
  );
}

export default TotalPrice;
