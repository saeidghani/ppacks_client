import styled from 'styled-components';
import { sm, xs } from '../../../constants/screenSizes';

export const CartIconContainer = styled.div`
  cursor: pointer;
  padding-top: 0.5rem;
   &:hover{
    color: ${({theme}) => theme.primaryColor};
    transform: scale(1.05);
  }  
`;