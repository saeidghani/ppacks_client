import styled from "styled-components";
import { _ImgWrapper, Translate } from '../../styled/Wrappers';
import {_S4} from '../../styled/Typography';

export const ImgWrapper = styled.div`
   align-self: center; 
   width: 76%;
   
   img {
      width: 100%;
   }
`;

export const ItemCardContainer = styled.div`
  cursor: pointer;
  height: 33rem;
  width: ${({width}) => width ? width : '21rem'};
  padding: 1rem 0;
  border: 1px solid ${({theme}) => theme.lightGrey};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  // & > *:not(last-child){
  //   margin-bottom: 0.1rem;
  // }
`;

export const Brand = styled.div`
    font-size: 1.4rem;
    border-top: 1px solid ${({theme}) => theme.primaryColor};
    border-right: 1px solid ${({theme}) => theme.primaryColor};
    border-bottom: 1px solid ${({theme}) => theme.primaryColor};
    margin-right: auto;
    text-align: center;
    padding: 0.1rem 1rem;
`;

export const Title = styled.div`
  font-size: 1.4rem;
  text-align: center;
  align-self: center;
  width: 82%;
  line-height: 1.7rem;
`;

export const Rating = styled.div`
  padding-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.3rem !important;
  height: 1.3rem !important;
  //transform: translateY(-6px);

  & > *:not(last-child){
    margin-right: 1rem;
  }
`;

export const RateWrapper = styled.div`
   //transform: translateY(-3px);
   padding-bottom: 0.2rem;
   line-height: 1.3rem !important;
   height: 1.3rem !important;
`;

export const RatingsQuantity = styled(_S4)`
  margin-top: auto;
  line-height: 1.3rem !important;
  height: 1.3rem !important;
`;

export const PriceContainer = styled.div`
   justify-self: flex-end;
   align-self: flex-end;
   display: flex;
   font-size: 1.4rem;
   text-align: right;
`;

export const CurrentPrice = styled.div`
    background-color: ${({theme}) => theme.primaryColor};
    color: white;
    padding: 0 0.7rem;
`;

export const PreviousPrice = styled.div`
    color: grey;
    margin-right: 1rem;
    text-decoration: line-through;
`;


