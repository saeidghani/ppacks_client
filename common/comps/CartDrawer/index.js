import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { StyledDrawer } from '../../styled/StyledDrawer';
import { showCartDrawer } from '../../../store/actions';
import CardContent from './CartContent';
import useRedirectToSignInPage from '../../hooks/useRedirectToSignInPage';
import {sm} from '../../constants/screenSizes';
import useWindowSize from '../../hooks/useWindowSize';
import {shippingPage} from '../../../common/urls';


function CartDrawer() {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const onShowCartDrawer = () => dispatch(showCartDrawer());
  const cartDrawerVisibility = useSelector(state => state.cart.cartDrawerVisibility.visible);
  const user = useSelector(state => state.auth.user);
  const redirectToSignInPage = useRedirectToSignInPage(shippingPage);

  const {width} = useWindowSize();

  useEffect(() => {
    setVisible(cartDrawerVisibility);
  }, [cartDrawerVisibility]);

  const handleCloseClick = () => {
    onShowCartDrawer();
  };

  const handleContinueClick = () => {
    onShowCartDrawer();
    if (!user) {
      redirectToSignInPage();
    } else {
      Router.push(shippingPage);
    }
  };
  return (
    <StyledDrawer
      placement="right"
      closable={false}
      visible={visible}
      width={(width > Number(sm.slice(0, 3))) ? '55rem' : '35rem'}
    >
      <CardContent
        onCloseClick={handleCloseClick}
        onContinueClick={handleContinueClick}
      />
    </StyledDrawer>
  );
}

export default CartDrawer;
