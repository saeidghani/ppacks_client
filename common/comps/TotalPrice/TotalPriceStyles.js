import styled, {css} from 'styled-components';
import { _S1 } from '../../styled/Typography';

export const TotalPriceContainer = styled.div`
  ${({borderTop}) => borderTop && css`
    border-top: 3px solid black;  
  `}
  ${({hidden}) => hidden && css`
    opacity: 0;
`}
`;

export const TotalPriceWrapper = styled(_S1)`
  font-weight: bold; 
  color: black;
`;

export const TotalPriceNum = styled(_S1)`font-weight: bold; color: red;`;
