import React, { useEffect, useState } from 'react';
import { Badge } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { CartIconContainer } from './CartIconStyles';
import { IconCart } from '../../SvgIcons';
import {showCartDrawer} from '../../../../store/actions';
import useWindowSize from '../../../hooks/useWindowSize';
import {xs} from '../../../constants/screenSizes';

function CartIcon() {
  const cartItems = useSelector(state => state.cart.cartItems.bags);
  const dispatch = useDispatch();
  const onShowCartDrawer = () => dispatch(showCartDrawer());

  const [iconSize, setIconSize] = useState(34);

  const {width} = useWindowSize();

  useEffect(() => {
    const xsSize = Number(xs.slice(0, -2));
    const iconSize = width < xsSize ? 28 : 34;
    setIconSize(iconSize);
  }, [width]);

  return (
    <CartIconContainer onClick={() => onShowCartDrawer()}>
      <Badge count={cartItems.length}>
        <IconCart size={iconSize}/>
      </Badge>
    </CartIconContainer>
  );
}

export default CartIcon;