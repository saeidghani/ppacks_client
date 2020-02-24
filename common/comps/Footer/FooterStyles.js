import styled from 'styled-components';
import {sm} from '../../../common/constants/screenSizes';


export const FooterContainer = styled.div` 
  display: grid;  
  grid-template-columns: auto 1fr auto;
  grid-gap: 2rem;  
  padding: 0 2rem;
  justify-items: center;
  
   @media(max-width: ${sm}) {
  grid-template-columns: auto auto;
  }  
`;

export const LogoYear = styled.span` 
  font-size: 1.4rem;
  margin-right: auto;
  padding-top: 1rem;
`;

export const NavigationWrapper = styled.div` 
  @media(max-width: ${sm}) {
    display: none;  
  }
`;