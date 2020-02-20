import styled from 'styled-components';
import { animated } from 'react-spring';

export const ImageFadeContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ImgWrapper = styled(animated.div)`
  width: 100%;
  height: 30rem;
  overflow: hidden;  
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  will-change: opacity;
  
  img {
    width: 100%;
    height: 100%;
  }
`;