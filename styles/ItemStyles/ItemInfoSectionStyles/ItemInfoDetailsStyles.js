import styled, { css } from 'styled-components';
import { ButtonOutline } from '../../../common/styled/Button';
import { SideBySide } from '../../../common/styled/Wrappers';
import {_S1, _S3, _S4} from '../../../common/styled/Typography';
import {xs} from '../../../common/constants/screenSizes';


export const S1 = styled(_S1)`color: gray;`;
export const S3 = styled(_S3)`color: gray;`;
export const S4 = styled(_S4)`color: gray;`;

export const BagTitle = styled.h2`
  margin: 0 !important;
  
  @media(max-width: ${xs}) {
    font-size: 2rem;
  } 
`;

export const BrandTitle = styled(S4)`
  margin: 0 !important;
`;

export const ItemReviewsContainer = styled(S3)`
  cursor: pointer;
`;

export const Price = styled(_S1)``;

export const PreviousPrice = styled.span`
    color: grey;
    margin-left: 1rem;
    text-decoration: line-through;
`;

export const ItemInfoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: start;
  
  & > *:not(last-child){
    margin-bottom: 0;
  }
`;



export const ItemRatingContainer = styled.div`
  &>*:first-child {
    margin-right: 1rem;
  }
  margin: 0 !important;
`;

export const ItemSizesContainer = styled(SideBySide)`
  margin-bottom: 0 !important;
  
  &>*{
    padding: 0.3rem 0.5rem;  
  }
  
   &>*:first-child{
    padding-left: 0;  
  }
`;

export const Size = styled(S4)`
  cursor: pointer;
  padding: 0.1rem 0.4rem;
  ${({ selected }) => selected && css`
    border: 1px solid ${({ theme }) => theme.darkSecondaryColor};
  `}  
`;

export const ItemColorsContainer = styled.div``;

export const ColorImgsContainer = styled.div`
  display: flex;
`;

export const ImgWrapper = styled.div`
   cursor: pointer;
   padding: 0.5rem;

   width: 10rem;  
    
    img {
        width: 100%;
    } 
 
  ${({ sm }) => sm && css`
    img {
    }
  `} 
   ${({ selected }) => selected && css`
    border: 1px solid ${({ theme }) => theme.darkSecondaryColor};
  `}
`;

export const ItemCountCounter = styled.div`
  cursor: pointer;
`;

export const ItemCounterContainer = styled.div`
  border: 1px solid lightgray;
  padding: 0.2rem 1rem;
  display: flex;
  justify-content: space-between;
  width: 10rem;
  margin: 1rem 0;
`;

export const Prices = styled.div``;

export const ItemProtectionTypesContainer = styled(SideBySide)`
  &>*{
    padding: 0.5rem;    
  }
   &>*:first-child{
    padding-left: 0;    
  }
  
   @media(max-width: ${xs}) {
    display: block;
  } 
`;

export const ProtectionTypeButtonWrapper = styled.div`
  display: flex;
  &>*{
    margin-right: 1rem;  
  }
`;

export const ProtectionTypeButton = styled.div`
  cursor: pointer;
  padding: 0.2rem 0.4rem;
  ${({ selected }) => selected && css`
    border: 1px solid ${({ theme }) => theme.darkSecondaryColor};
  `} 
`;

export const ItemDeliveryDurationContainer = styled.div`
  display: flex;
  & > *:not(last-child){
    margin-right: 2rem;
  }
`;

export const ItemPricesContainer = styled.div`
`;

export const AddToCartButton = styled(ButtonOutline)`
  align-self: center;
`;

