import styled from 'styled-components';
import { ButtonOutline } from '../../common/styled/Button';
import {sm, xs} from '../../common/constants/screenSizes';

export const Container = styled.div`
  background-color: ${({theme}) => theme.lightSecondaryColor};
    
  display: grid;
  grid-template-rows: 2rem auto 2rem; 
  grid-template-columns: repeat(16, 1fr); 
  align-items: center;  
  
   @media(max-width: ${xs}){
    grid-template-rows: 1fr 1fr 1fr;   
    grid-template-columns: repeat(6, 1fr);   
  }   
`;

export const ImageWrapper = styled.div` 
  grid-row: 2/3;
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
    
  img {
  width: 100%;  
  height: 100%;
  } 
  
  @media(max-width: ${xs}){
    grid-row: 1/-1; 
    grid-column: 2/-2;     
    //height: 60%;
  }
`;

export const _ContentContainer = styled.div`  
  grid-row: 2/3;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center; 
  
   @media(max-width: ${xs}){
    grid-row: 1/-1; 
    grid-column: 2/-2;     
  } 
`;

export const SolidRectangle = styled.div`
  grid-row: 1/-1;
  background-color: ${({theme}) => theme.darkSecondaryColor};
  height: 50%;   
  z-index: 1;
  
  @media(max-width: ${xs}){
    grid-row: 1/-1; 
    height: 65%;   
  } 
`;

export const _Description = styled.div`    
  margin-bottom: 2rem;
  text-align: center;
  color: ${({theme}) => theme.black};
  
    @media(max-width: ${sm}){
    font-size: 1.5rem; 
    margin-bottom: 1rem;
  }
  
   @media(max-width: ${xs}){
    grid-row: 1/-1; 
    color: #fff; 
    font-size: 1.4rem; 
    margin-bottom: 0.7rem;
    width: 90%;
  } 
`;

export const ShopButton = styled(ButtonOutline)` 
  color: ${({theme}) => theme.black};
  
    @media(max-width: ${sm}){
    font-size: 1.5rem; 
  }
  
    @media(max-width: ${xs}){     
    color: #fff; 
    font-size: 1.4rem; 
  } 
`;