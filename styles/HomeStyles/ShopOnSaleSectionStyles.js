import styled from 'styled-components';
import {
  _ContentContainer,
  _Description,
  Container,
  ImageWrapper,
  ShopButton,
  SolidRectangle
} from './ShopStyles';
import {xs} from '../../common/constants/screenSizes';


export const ShopOnSaleCoverAll = styled.div``;
export const ShopOnSaleContainer = styled(Container)``;
export const ImgWrapper = styled(ImageWrapper)`
  grid-column: 1/9;
`;
export const ContentContainer = styled(_ContentContainer)`  
  grid-column: 10/16;
`;
export const SolidColor = styled(SolidRectangle)`
  grid-column: 9/13;
  
  @media(max-width: ${xs}) {
  grid-column: 4/span 2;     
  }
`;
export const Description = styled(_Description)``;
export const ShopOnSaleButton = styled(ShopButton)``;
