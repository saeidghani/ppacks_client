import styled, {css} from 'styled-components';

export const LinkText = styled.a`
  background-color: transparent;
  border: none; 
  cursor: pointer;
`;

export const LinkOutline = styled.a`
  border: 4px solid ${({theme}) => theme.primaryColor};
  padding: 0.6rem 1rem;
  cursor: pointer;
  color: ${props => props.color ? props.color : 'black'};
  font-size: ${props => props.fontSize ? props.fontSize : '1.6rem'};
`;

export const LinkFilled = styled.a`
  font-size: ${props => props.fontSize ? props.fontSize : '1.6rem'};  
  background-color: ${({theme}) => theme.primaryColor};
  color: #fff;
  border: none;
  padding: 0.6rem 1.4rem;
  cursor: pointer;
  
   &:hover{
    color: #fff;
    transform: scale(1.05);
  }
`;

export const ButtonText = styled.button`
  background-color: transparent;
  border: none;
  padding: 0.2rem 1rem;
  cursor: pointer;
  outline: none;
  
  &:hover{
    color: ${({theme}) => theme.primaryColor};
    transform: scale(1.05);
  }
`;

export const ButtonOutline = styled.button`
  background-color: transparent;
  border: 4px solid ${({theme}) => theme.primaryColor};
  padding: 0 1rem;
  cursor: pointer;
  outline: none;
  
  ${({disabled}) => disabled && css`
    color: lightgray;
    cursor: not-allowed;
`}
  
  &:hover{
    //color: ${({theme}) => theme.primaryColor};
    transform: scale(1.05);
  }
`;

export const ButtonFilled = styled.button`
  background-color: ${({theme}) => theme.primaryColor};
  color: #fff;
  border: none;
  padding: 0.6rem 1.4rem;
  cursor: pointer;
  outline: none;
`;
