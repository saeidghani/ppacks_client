import React from 'react';
import Router from 'next/router';

import { NavigationContainer, Column, NavButton } from './NavigtionStyles';
import AnimatedButton from './AnimatedBorderBottomOfButton';
import {aboutPage, contactPage} from '../../urls';


function Navigation() {
  return (
    <NavigationContainer>
      <AnimatedButton lineWidth='6.5rem'>
        <NavButton onClick={() => Router.push('/')}>
          Home
        </NavButton>
      </AnimatedButton>
      <Column>|</Column>
      <AnimatedButton lineWidth='6.5rem' >
        <NavButton onClick={() => Router.push(aboutPage)}>
          About
        </NavButton>
      </AnimatedButton>
      <Column>|</Column>
      <AnimatedButton lineWidth='7.5rem' >
        <NavButton onClick={() => Router.push(contactPage)}>
          Contact
        </NavButton>
      </AnimatedButton>
    </NavigationContainer>
  );
}

export default Navigation;