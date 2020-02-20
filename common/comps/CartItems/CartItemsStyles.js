import styled from 'styled-components';
import { _S1, _S2, _S3, _S4 } from '../../styled/Typography';

export const S1 = styled(_S1)``;
export const S2 = styled(_S2)``;
export const S3 = styled(_S3)`color: black;`;
export const S4 = styled(_S4)`color: #555;`;

export const BagTitle = styled(S3)`font-weight: bold; color: black;`;

export const FeatureTitle = styled(_S4)`font-weight: bold; color: black;`;

export const CartItemsContainer = styled.div`
  height: 100%;
  overflow: auto;
  padding: 1rem;  
`;

export const CartItemWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 10rem 1fr 1.5rem;
  grid-gap: 1rem;  
  align-items: center;
  margin-bottom: 4rem;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  
  img {
    width: 100%;    
  }
`;

export const RemoveItemIcon = styled.div`
  align-self: center;  
  cursor: pointer;
  width: 100%;
  font-size: 1.3rem;  
`;