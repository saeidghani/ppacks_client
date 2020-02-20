import styled, {css} from 'styled-components';
import { _S1, _S2, _S3, _S4 } from '../../styled/Typography';
import { ButtonOutline } from '../../styled/Button';

export const S1 = styled(_S1)``;
export const S2 = styled(_S2)``;
export const S3 = styled(_S3)`color: black;`;
export const S4 = styled(_S4)`color: #555;`;

export const DrawerTitle = styled(S1)`font-weight: bold; color: ${({theme}) => theme.primaryColor};`;

export const CartContentContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 5rem 1fr 5rem;
  grid-gap: 1rem;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
`;

export const BodyWrapper = styled.div`
  height: 50rem;
  display: flex;
  flex-direction: column;
`;

export const EmptyCartMsg = styled.span`
  align-self: center;
  font-size: 3rem;
  text-align: center; 
  margin-top: 2rem; 
  ${({hidden}) => hidden && css`
    display: none;
`}
`;

export const CloseDrawerIcon = styled.div`
  cursor: pointer;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  padding-top: 1rem;
  border-top: 1px solid lightgray;
  display: grid;
  grid-template-columns: auto 1fr auto;
`;

export const ButtonContinue = styled(ButtonOutline)`
  grid-column: 3/4;
`;