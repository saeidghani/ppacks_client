import styled, { css } from 'styled-components';
import {sm} from '../../../common/constants/screenSizes';

export const ItemInfoImagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 1rem;
  justify-items: center;
  
  @media(max-width: ${sm}) {
    grid-template-rows: auto 1fr;
    grid-template-columns: auto;    
    grid-gap: 4rem;
  } 
`;

export const ImgsContainer = styled.div`
  &>*:not(:last-child){
    margin-bottom: 1.5rem;
  }
  
  @media(max-width: ${sm}) {
    grid-row: 2/-1;
    display: flex;
  } 
`;

export const ImgWrapper = styled.div`
   cursor: pointer;
   padding: 0;
   display: flex;
   justify-items: center;
   align-items: start;
   width: 100%;      
    img {
        width: 100%;
    }    
`;

export const ThumbnailWrapper = styled(ImgWrapper)``;

export const CoverImgWrapper = styled(ImgWrapper)`
   @media(max-width: ${sm}) {
    grid-row: 1/2;
    width: 30rem;
  } 
`;
