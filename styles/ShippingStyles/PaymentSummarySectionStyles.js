import styled, {css} from 'styled-components';
import { Card } from 'antd';
import { _S4 } from '../../common/styled/Typography';

export const PaymentSummarySectionContainer = styled(Card)`
  margin-bottom: 1rem;
    ${({hidden}) => hidden && css`
    display: none;
`}
`;

export const Feature = styled.div`
  margin-bottom: 1rem;
`;

export const Title = styled(_S4)`
  font-weight: bold;
  margin-right: 1rem;
`;
