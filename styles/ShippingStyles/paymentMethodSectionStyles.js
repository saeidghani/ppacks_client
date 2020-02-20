import styled, {css} from 'styled-components';
import { Card } from 'antd';
import { _S4 } from '../../common/styled/Typography';

export const PaymentMethodSectionContainer = styled(Card)`
  margin-bottom: 1rem;
    ${({hidden}) => hidden && css`
    display: none;
`}
`;

export const Feature = styled.div`
  margin-bottom: 0.5rem;
`;

export const Title = styled(_S4)`
  font-weight: bold;
  margin-right: 1rem;
`;

export const ErrorMsg = styled.span`
 display: block;
 text-align: center;
 margin-top: 1rem;
 font-weight: bold;
 color: red;
`;

