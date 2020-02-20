import styled from 'styled-components';
import {_ImgWrapper} from '../common/styled/Wrappers';
import { sm } from '../common/constants/screenSizes';

export const AboutContainer = styled.div`
  padding: 5rem 5rem 10rem 5rem;
`;

export const Title = styled.h3`
  text-align: center;
`;

export const Paragraph = styled.p`
  text-align: center;
`;

export const Photos = styled.p`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 2rem;
  margin: 5rem 0;
  padding: 2rem 0;
  border-bottom: 1px solid lightgray;
  
  @media(max-width: ${sm}) {
    grid-template-columns: 1fr;   
  }
`;

export const WeAre = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`;

export const Voice = styled.div``;

export const ImgWrapper = styled.div`
  width: 100%;
  
  img {
    width: 100%;  
  }  
`;