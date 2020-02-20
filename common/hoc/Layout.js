import React, { Fragment } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import StateChecker from './StateChecker';
import Header from '../comps/Header';
import Meta from '../comps/Meta';
import Footer from '../comps/Footer';
import CartDrawer from '../comps/CartDrawer';
import {xl, lg, md, sm, xs } from '../constants/screenSizes';

const theme = {
  primaryColor: '#FFD34D',
  lightSecondaryColor: '#e9f6fc',
  darkSecondaryColor: 'skyblue',
  tertiaryColor: 'deeppink',
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1400px',
  boxShadow: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  marginSm: '1.5rem',
  marginMd: '4rem',
  marginLg: '8rem'
};

const GlobalStyle = createGlobalStyle` 
  html {
    box-sizing: border-box;  
    height:100%;
    
    @media(max-width: ${xl}){
    font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%          
    }
    @media(max-width: ${lg}){
    font-size: 56.25%;         
    }
    @media(max-width: ${md}){
    font-size: 50%;         
    }
    @media(min-width: ${xl}){
    font-size: 75%;         
    }
  }
  *, *:before, *:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }
  body {
    font-size: 1.6rem;
    line-height: 2;
    height:100%;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  min-height: 85vh;
  margin: 0 auto;
  
  .itm {
  background-color: orangered;
  font-size: 36px;
  padding: 0 20px;
  display: grid;
  justify-content: center;
  align-content: center;  
  border: 5px solid rgba(0, 0, 0, 0.06);    
  }  
`;

export default function MyLayout(props) {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Meta/>
        <GlobalStyle/>
        <StateChecker>
            <Header/>
          <Inner>
            <CartDrawer/>
            {props.children}
          </Inner>
            <Footer/>
        </StateChecker>
      </ThemeProvider>
    </Fragment>
  );
};