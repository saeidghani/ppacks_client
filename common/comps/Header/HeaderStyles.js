import styled from 'styled-components';
import {sm, xs} from '../../../common/constants/screenSizes';


export const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;  
  justify-content: space-between;
  &>*:not(:last-child) {
    margin-right: 2rem;
  }
  
 @media(max-width: ${sm}) {
  flex-wrap: wrap;
 }
  
  @media(max-width: 520px) {
  justify-content: center;
 }
`;

export const NavigationWrapper = styled.div`  
  padding-bottom: 1rem; 
`;

export const UserAndCart = styled.div`
  display: flex;
  
  &>*:not(:last-child) {
    margin-right: 2rem;
  }
`;
