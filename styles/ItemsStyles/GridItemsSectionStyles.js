import styled, { css } from 'styled-components';
import { sm } from '../../common/constants/screenSizes';

export const GridContainer = styled.div`
   display: grid;  
   grid-template-rows: 5rem 1fr;   
   grid-gap: 2rem;    
`;

export const GridHeader = styled.div`
   grid-row: 1 / 2;
   grid-column: 1 / -1;
   display: grid;
   grid-template-columns: auto 1fr auto;
   align-self: center;
   background-color: ${({ theme }) => theme.primaryColor};
   padding: 1rem 2rem;
   color: #fff; 
   
    @media(max-width: 480px){
        display: block;
        padding: 1rem;
    } 
`;

export const CountSummary = styled.div`
   align-self: flex-start;  
   font-size: 1.8rem; 
   
    ${({ bgSize }) => bgSize && css`
        display: block;
      @media(max-width: ${sm}){
      display: none;
      } 
   `} 
   
   ${({ smSize }) => smSize && css`
        display: none;
      @media(max-width: ${sm}){
        display: block;
      }      
      
       @media(max-width: 480px){
        display: none;
      } 
   `} 
`;

export const Sort = styled.div`
   grid-column-end: -1;
   display: flex;
   
    @media(max-width: 480px){
        margin-left: auto;
    }
`;

export const SortBy = styled.span`
   margin-right: 1.5rem;
   font-size: 1.8rem;
`;

export const Grid = styled.div`
   grid-row: 2 / 3;
   grid-column: 1 / -1;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
   grid-gap: 1.5rem 1rem; 
   justify-items: center;
   
   // display: flex;
   // flex-wrap: wrap;
      
   @media(max-width: ${sm}) {
    grid-gap: 1.5rem 0.4rem; 
   }
`;

export const GridItemWrapper = styled.div`
    padding: 1rem;
`;

export const GridItem = styled.div`
    &:hover {
      transform: scale(1.05);
      z-index: 5;
      box-shadow: 0 0 15px 5px rgba(0,0,0,0.1);
    }
`;