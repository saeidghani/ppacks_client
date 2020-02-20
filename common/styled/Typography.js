import styled, {css} from 'styled-components';

export const H = styled.span`
`;

export const _S1 = styled.span`
   font-size: 2.1rem;  
   ${({bold}) => bold && css`font-weight: bold`}
`;

export const _S2 = styled.span`
   font-size: 1.9rem;  
   ${({bold}) => bold && css`font-weight: bold`}
`;

export const _S3 = styled.span`
   font-size: 1.7rem;  
   ${({bold}) => bold && css`font-weight: bold`}
`;

export const _S4 = styled.span`
   font-size: 1.5rem;  
   ${({bold}) => bold && css`font-weight: bold`}
`;
