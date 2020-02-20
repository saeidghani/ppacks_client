import styled, { css } from 'styled-components';
import { _ImgWrapper } from '../../common/styled/Wrappers';
import { sm } from '../../common/constants/screenSizes';

export const ShippingContainer = styled.div`
  padding: 2rem;
  display: Grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 2rem; 
  
  @media(max-width: ${sm}) {
    grid-template-columns: 1fr;    
  }
`;

export const ReceiveDetails = styled.div`
  &>* {
    margin-bottom: 2rem;  
  }
`;

export const CartItemWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 10rem 1fr 1.5rem;
  grid-gap: 1rem;  
  align-items: center;
  margin-bottom: 4rem;
`;

export const ImgWrapper = styled(_ImgWrapper)``;

export const EmptyCartMsg = styled.span`
  font-size: 3rem;
  text-align: center; 
  display: flex;
  justify-content: center;
  ${({hidden}) => hidden && css`
    display: none;
`};
`;

export const CartItemsSummaryContainer = styled.div`
  ${({hidden}) => hidden && css`
    display: none;
`};
`;
