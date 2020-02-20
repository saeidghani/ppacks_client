import React from 'react';
import { Icon } from 'antd';

import {
  DrawerTitle,
  CartContentContainer,
  HeaderWrapper,
  BodyWrapper,
  CloseDrawerIcon,
  EmptyCartMsg,
  FooterWrapper,
  ButtonContinue
} from './CartDrawerStyles';
import CartItems from '../CartItems';
import TotalPrice from '../TotalPrice';
import { useSelector } from 'react-redux';

function CartContent({ onCloseClick, onContinueClick }) {
  const cartItems = useSelector(state => state.cart.cartItems.bags);

  return (
    <CartContentContainer>
      <HeaderWrapper>
        <DrawerTitle>Cart Items</DrawerTitle>
        <CloseDrawerIcon onClick={onCloseClick}><Icon type='close'/></CloseDrawerIcon>
      </HeaderWrapper>
      <BodyWrapper>
        <EmptyCartMsg hidden={cartItems.length !== 0}>Your cart is empty</EmptyCartMsg>
        <CartItems/>
      </BodyWrapper>
      <FooterWrapper>
        <TotalPrice hidden={cartItems.length === 0}/>
        <ButtonContinue onClick={onContinueClick} type="primary" disabled={cartItems.length === 0}>
          Continue
        </ButtonContinue>
      </FooterWrapper>
    </CartContentContainer>
  );
}

export default CartContent;
