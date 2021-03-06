import React from 'react';

import { FooterContainer, NavigationWrapper, LogoYear } from './FooterStyles';
import SocialNetworks from '../SocialNetworks';
import Navigation from '../Navigation';

function Footer() {
  return (
    <FooterContainer>
      <LogoYear>@PPACKS</LogoYear>
      <NavigationWrapper>
        <Navigation/>
      </NavigationWrapper>
      <SocialNetworks/>
    </FooterContainer>
  );
}

export default Footer;