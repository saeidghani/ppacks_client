import React from 'react';
import { Icon } from 'antd';

import {
  S4,
  CartItemsContainer,
  CartItemWrapper,
  BagTitle,
  ImgWrapper,
  FeatureTitle,
  RemoveItemIcon
} from './CartItemsStyles';
import { removeFromCart } from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

function CartItems({height}) {
  const dispatch = useDispatch();
  const onRemoveFromCart = bagId => dispatch(removeFromCart(bagId));
  const cartItems = useSelector(state => state.cart.cartItems.bags);

  const handleRemoveItemClick = (bagId) => {
    onRemoveFromCart(bagId);
  };

  return (
    <CartItemsContainer height={height}>
      {cartItems.map(bag =>
        <CartItemWrapper key={bag.bagId}>
          <ImgWrapper>
            <img src={`/img/backpacks/${bag.category.slug}/${bag.brand.slug}/${bag.coverImage}`}
                 alt=""/>
          </ImgWrapper>
          <div>
            <BagTitle>{bag.title}</BagTitle>
            <div><FeatureTitle>Size:</FeatureTitle><S4> {bag.size}</S4></div>
            <div><FeatureTitle>Color:</FeatureTitle><S4> {bag.color.colorName}</S4></div>
            <div>
              <FeatureTitle>Protection type:</FeatureTitle><S4> {bag.protectionType.title}</S4>
            </div>
            <div><FeatureTitle>Count:</FeatureTitle><S4> {bag.count}</S4></div>
            <div><FeatureTitle>Price:</FeatureTitle><S4> ${(Math.round(bag.price)*1e2)/1e2}</S4></div>
            {bag.count>1 && <div>
              <FeatureTitle>Final price:</FeatureTitle>
              <S4> ${(Math.round(bag.price*bag.count)*1e2)/1e2}</S4>
            </div>}
          </div>
          <RemoveItemIcon onClick={() => handleRemoveItemClick(bag.bagId)}>
            <Icon type='close'/>
          </RemoveItemIcon>
        </CartItemWrapper>
      )}
    </CartItemsContainer>
  );
}

export default CartItems;
