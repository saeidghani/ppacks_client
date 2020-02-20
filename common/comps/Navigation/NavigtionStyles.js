import styled from 'styled-components';
import { ButtonText } from '../../styled/Button';


export const NavigationContainer = styled.div`
  display: flex;    
`;

export const Column = styled.span`
  margin-right: 0.9rem;
  margin-left: 2rem;
  color: black;
  
   @media(max-width: ${({theme}) => theme.xsSize}) {
  margin-right: 0.3rem;
  margin-left: 1.2rem;
 }
`;

export const NavButton = styled(ButtonText)` 
  color: black;  
  outline: none;
  border: none;
  &:hover{
  color: black;
  }
`;




