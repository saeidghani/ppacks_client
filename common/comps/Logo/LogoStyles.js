import styled from 'styled-components';
import {sm} from '../../constants/screenSizes';

export const LogoContainer = styled.h1`  
  margin: 0 2rem;
  padding-bottom: 1rem;
  font-size: 3rem;
  transform: skew(-8deg);
  a{
    background:${({theme}) => theme.primaryColor};  
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0 0.5rem;
  }  
  &:hover{
    transform: scale(1.05) skew(-8deg);
  }
`;
