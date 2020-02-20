import React from 'react';
import { Card } from 'antd';

import CartItems from '../../common/comps/CartItems';
import TotalPrice from '../../common/comps/TotalPrice';
import { useSelector } from 'react-redux';
import { EmptyCartMsg, CartItemsSummaryContainer } from '../../styles/ShippingStyles';


function CartItemsSummarySection() {
  const cartItems = useSelector(state => state.cart.cartItems.bags);

  return (
    <Card>
      <EmptyCartMsg hidden={cartItems.length}>Your cart is empty</EmptyCartMsg>
      <CartItemsSummaryContainer hidden={!cartItems.length}>
        <CartItems height='30rem'/>
        <TotalPrice borderTop/>
      </CartItemsSummaryContainer>
    </Card>
  );
}

export default CartItemsSummarySection;
