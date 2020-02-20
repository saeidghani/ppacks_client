import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';

import { HeaderContainer, NavigationWrapper, UserAndCart } from './HeaderStyles';
import Logo from '../Logo';
import Navigation from '../Navigation';
import SignInUpBox from './SignInUPBox';
import CartIcon from './CartIcon';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

function Header() {

  return (
    <HeaderContainer>
      <NavigationWrapper>
        <Navigation/>
      </NavigationWrapper>
      <Logo/>
      <UserAndCart>
        <SignInUpBox/>
        <CartIcon/>
      </UserAndCart>
    </HeaderContainer>
  );
}

export default Header;