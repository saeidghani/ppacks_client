import styled from 'styled-components';
import { ButtonText, ButtonOutline } from '../../../styled/Button';
import {sm, xs} from '../../../constants/screenSizes';


export const SignInUpBoxContainer = styled.div`
  display: flex;
  
  &>*:first-child {
    margin-right: 2rem;
  }
`;

export const UserName = styled.span`
  color: black;
  font-size: 1.8rem;
  padding-top: 0.7rem;
  text-transform: capitalize;
`;

export const SignInButton = styled(ButtonText)`
  color: black;
`;

export const SignUpButton = styled(ButtonOutline)`
  color: black; 
`;

export const SignOutButton = styled(ButtonOutline)`
  color: black; 
`;
