import styled, {css} from "styled-components";

export const H1 = styled.h1``;

export const SideBySide = styled.div`
  display: flex;
  & > *:not(:last-child){
    margin-right: 2rem;
  }
`;

export const Align = styled.div`
 display: flex;
 justify-content: center;
`;

export const Translate = styled.div`  
  ${({y}) => y && css`
    transform: translateY(${y}rem); 
  `}
  
  ${({x}) => x && css`
    transform: translateX(${x}rem); 
  `}
`;

export const Margin = styled.div`
  ${({top}) => top && css`
    margin-top: ${top}rem; 
  `}
  
  ${({bottom}) => bottom && css`
    margin-bottom: ${bottom}rem; 
  `}
    
  ${({right}) => right && css`
    margin-right: ${right}rem; 
  `}
      
  ${({left}) => left && css`
    margin-left: ${left}rem; 
  `}
  
  ${({x}) => x && css`
    margin-right: ${x}rem; 
    margin-left: ${x}rem; 
  `}
      
  ${({y}) => y && css`
    margin-top: ${y}rem; 
    margin-bottom: ${y}rem; 
  `}
`;

export const _ImgWrapper = styled.div`
    width: 100%;  
    height: 100%;
    
    img {
        width: 100%;
        height: 100%;
    }      
`;
