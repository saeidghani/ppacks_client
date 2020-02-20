import styled from 'styled-components';
import {sm, xs} from '../../common/constants/screenSizes';

export const HomeHeaderSectionContainer = styled.div`  
    display: grid;     
    grid-template-columns: 1fr auto 5fr 1fr;
    padding: 0 2rem;
    
    @media(max-width: ${sm}) {
      padding: 0;    
    }
    
    @media(max-width: ${xs}) {
      grid-template-columns: 1fr auto 1fr;
    }
`;

export const VerticalMenuContainer = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
`;

export const BannerContainer = styled.div`
  background-color: ${({theme}) => theme.lightSecondaryColor };  
  grid-row: 1 / 2;
  grid-column: 3 / 4;  
  height: 30rem;
  background-size: cover;
  background-position: center;
  
  img {
    height: 100%;     
  }
  
  @media(max-width: ${xs}) {
     display: none;
  }
`;

