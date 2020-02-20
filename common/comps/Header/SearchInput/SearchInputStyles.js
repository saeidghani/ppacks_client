import styled from 'styled-components';
import {sm, xs, md} from '../../../constants/screenSizes';

export const SearchInputCoverAll = styled.div`
 width: 30rem;
 position: relative;
 margin-left: 6rem;
 
 @media(max-width: ${md}) {
  margin-left: 3rem;
  width: 28rem; 
 }
 
  @media(max-width: ${sm}) {
    grid-row: 2/3;
    grid-column: 1/-1; 
    align-self: start;
    width: 50rem;
    margin-left: 0;
    margin-bottom: auto;
 }
 
    @media(max-width: ${xs}) {
    grid-row: 2/3; 
    grid-column: 3/-1;
    width: 70%;
    margin-right: auto;
 }
`;

export const SearchInputContainer = styled.div`
   grid-row: 1/-1;
   grid-column-end: 4; 
   z-index: 50000;
   width: 100%;
   padding-top: 1rem;  
   
   @media(max-width: ${sm}) {
    padding-top: 0;           
   }
`;

