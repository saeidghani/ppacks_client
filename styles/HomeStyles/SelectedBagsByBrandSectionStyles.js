import styled, { css } from 'styled-components';
import { Tabs } from 'antd';
import { _ImgWrapper } from '../../common/styled/Wrappers';
import { ButtonOutline } from '../../common/styled/Button';
import {xs, sm, md} from '../../common/constants/screenSizes';

const { TabPane } = Tabs;

export const StyledTabPane = styled(TabPane)`

`;

export const SelectedBagsByBrandCoverAll = styled.div`
  padding: 0 2rem;
  
  @media(max-width: ${xs}) {
     padding: 0;
  }
`;

export const SelectedBagsByBrandContainer = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  width: 20rem;
  border-bottom: 1px solid ${({theme}) => theme.tertiaryColor}; 
  
   @media(max-width: ${xs}) {  
   margin-left: 2rem;
  }
`;

export const SelectedTabPaneContainer = styled.div`
  display: grid;
  grid-template-rows: 25rem 1fr;
  grid-gap: 2rem;  
  height: 100%;
  justify-content: center;
  
   @media(max-width: 470px){
    grid-template-rows: 10rem 3fr;   
 }
`;

export const ImgWrapper = styled(_ImgWrapper)`
  ${props =>
  props.leftImg &&
  css`
      grid-row: span 2;
    `}

`;

export const PosterWrapper = styled.div`
 justify-self: center;
 width: 70%;  
 display: grid;
 grid-template-rows: 1fr max-content 1fr;
 grid-template-columns: 1fr max-content 1fr;
 justify-items: center;
 
 img {  
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;  
  height: 100%;  
 } 
 
  @media(max-width: ${sm}){    
    width: 100%;  
 }
 
  @media(max-width: 470px){    
    background-color: ${({theme}) => theme.darkSecondaryColor};
    img {
      display: none;
    }
 }
`;

export const SeeAllButtonWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  z-index: 5;
`;

export const SeeAllButton = styled(ButtonOutline)`
    color: ${({color}) => color};
    font-weight: bold;
  
   @media(max-width: ${sm}){
    font-size: 1.5rem;
 }
 
  @media(max-width: 470px){    
    color: #fff; 
 }
`;

export const ItemsContainer = styled.div`
  margin: 0 auto;
  width: 85%;
  display: flex;  
  justify-content: center;
  flex-wrap: wrap;
  
   &>*{
    margin-bottom: 1rem;
  }
  
  &>*:not(last-child){
    margin-right: 2rem;
  }
  
   @media(max-width: ${md}){
      width: 100%;
 }
 
   @media(max-width: ${xs}) {
  width: 95%;
   &>*:not(last-child){
    margin-right: 0.5rem;
  }
  }
`;

export const ItemCardWrapper = styled.div`
 
 `;