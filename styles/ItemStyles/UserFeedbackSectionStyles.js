import styled from 'styled-components';
import { SideBySide } from '../../common/styled/Wrappers';
import { ButtonOutline, ButtonFilled } from '../../common/styled/Button';
import {_S1, _S2, _S3} from '../../common/styled/Typography';
import {sm} from '../../common/constants/screenSizes';

export const S1 = styled(_S1)`color: gray;`;
export const S2 = styled(_S2)`color: gray;`;
export const S3 = styled(_S3)`color: gray;`;

export const RatingsCount = styled(S1)``;

export const Review = styled.div`
   display: grid;
   grid-template-columns: auto 1fr;
   grid-gap: 2rem;  
   padding: 2rem;
   
   & > *:last-child{
      grid-column: 1 / -1;
   }
   
   @media(max-width: ${sm}){
    grid-template-columns: 1fr;
  }
`;

export const ReviewsContainer = styled.div``;

export const ReviewsCount = styled.div`
   grid-column: 1 / -1; 
   padding: 0.3rem 1.7rem;
   font-size: 1.8rem;
   font-weight: 500;
`;

export const ReviewText = styled.div``;

export const ReviewerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(last-child){
  margin-bottom: 0.5rem;
  }
`;

export const AvatarAndUserNameContainer = styled(SideBySide)``;

export const SizeAndColorContainer = styled(SideBySide)``;

export const RateWrapper = styled.div`
   margin-top: -1rem; 
   margin-bottom: -1rem;
`;

export const Date = styled.span`
  border-bottom: 1px solid lightgray;
  padding: 0 2rem 0.5rem 2rem;
`;

export const HelpfulCount = styled.div``;

export const HelpfulButton = styled.div``;

export const ReviewsHeaderContainer = styled.div`
   grid-column: 1 / -1;
   background-color: ${({ theme }) => theme.primaryColor};
   padding: 0.5rem 2rem;
   margin-bottom: 2.5rem;
   
   span {
     color: #555;
   }
`;

export const Sort = styled.div`
   display: flex;
   grid-column-end: -1;
   
   span {
      margin-right: 1.5rem;
   }
`;

export const SortBy = styled.div`
  color: #fff;
  margin-right: 1rem;
`;

export const UserFeedbackHeaderContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr 3fr;
   grid-gap: 2rem;
   margin-bottom: 4rem;
   
  @media(max-width: ${sm}){
    grid-template-columns: 1fr;
  }     
`;

export const UserReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ReviewError = styled.span`
  color: red;
  font-weight: bold;
  padding-bottom: 1rem;
`;

export const ReviewButtonFilled = styled(ButtonFilled)`
  margin-bottom: 1rem;
`;

export const ReviewButtonOutline = styled(ButtonOutline)`
  margin-bottom: 1rem;
`;

export const RatingsDetailsContainer = styled.div``;

export const RatingsCountContainer = styled.div`
   grid-column: 1 / -1;
    display: flex;
  & > *:not(:last-child){
    margin-right: 1rem;
  }
   justify-content: center;
   align-items: center;
   border-bottom: 1px solid lightgray;
   text-align: center;  
`;

export const RatingDetailsBody = styled.div`
   padding-left: 2rem;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const RatingAvgContainer = styled.div`  
`;

export const RatingAvgNum = styled.span`
   font-size: 4rem;
`;

export const RatingAvgDescription = styled.span`
   font-size: 1.5rem;
`;

export const RatingButtonOutline = styled(ButtonOutline)`
  margin-bottom: 1rem;
`;

export const UserRatingContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 0.5rem;
`;

export const UserFeedbackSectionOuterBg = styled.div`
  background-color: ${({ theme }) => theme.lightSecondaryColor};
  padding: 4rem;
`;

export const UserFeedbackSectionInnerBg = styled.div`
  background-color: #fff;
  padding: 2rem;
`;

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > * {
    width: 30rem;
  }
`;

export const ProgressBox = styled.div`
  display: flex;
  align-items: center;

  & > *:not(last-child){
    margin-right: 1rem;
  }

  & > *:nth-child(1), & > *:nth-child(2) {
    margin-top: 0.2rem;
  }

  & > *:nth-child(2) {
    margin-top: 0.4rem;
  }

  span {
     font-size: 1.6rem;
  }
`;
