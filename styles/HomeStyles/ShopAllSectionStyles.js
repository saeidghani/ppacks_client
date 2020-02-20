import styled from 'styled-components';
import {
  Container,
  ImageWrapper,
  _ContentContainer,
  SolidRectangle,
  _Description,
  ShopButton
} from './ShopStyles';
import {xs} from '../../common/constants/screenSizes';


export const ShopAllSectionCoverAll = styled.div``;
export const ShopAllSectionContainer = styled(Container)``;
export const ImgWrapper = styled(ImageWrapper)`
  grid-column: 9/-1;
`;
export const ContentContainer = styled(_ContentContainer)`  
  grid-column: 2/8;
`;
export const SolidColor = styled(SolidRectangle)`
  grid-column: 5/9;
  
  @media(max-width: ${xs}) {
    grid-column: 2/span 2;     
  }
`;
export const Description = styled(_Description)``;
export const ShopAllButton = styled(ShopButton)``;

