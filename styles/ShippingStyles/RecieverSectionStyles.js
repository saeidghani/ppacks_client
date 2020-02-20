import styled from 'styled-components';
import { Card } from 'antd';
import { _S4 } from '../../common/styled/Typography';

export const ReceiverSectionContainer = styled(Card)``;

export const Feature = styled.div`
  margin-bottom: 0.5rem;
`;

export const Title = styled(_S4)`
  font-weight: bold;
  margin-right: 1rem;
`;

export const ErrorMsg = styled.span`
  font-weight: bold;
  color: red;
  text-align: right;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1.5rem 0;
`;