import styled from 'styled-components';
import {sm, md} from '../../common/constants/screenSizes';

export const ItemsContainer = styled.div`
    padding: 4rem 2rem;
    h2 {
        margin: 0;
    }      
`;

export const Main = styled.div`
   margin: 4rem 0;
   display: grid;   
   grid-template-columns: 1fr 4fr;         
   grid-gap: 2rem;      
   
   @media(max-width: ${sm}) {
    display: block;         
   }
`;

export const PaginationWrapper = styled.div`
   margin: 2rem 0;
   grid-column: 2/-1;  
`;

