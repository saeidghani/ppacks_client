import styled from 'styled-components';
import {sm} from '../../../common/constants/screenSizes';

export const ItemInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  grid-gap: 1rem;
  padding: 1rem; 
  margin: 7rem 0;    
  
  @media(max-width: ${sm}) {
    grid-template-columns: 1fr;   
  }  
`;

export const Main = styled.div`
    margin: 2rem 0;
`;