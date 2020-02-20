import React from 'react';
import { useSelector } from 'react-redux';

import {
  S3,
  RatingsDetailsContainer,
  RatingsCountContainer,
  RatingDetailsBody,
  RatingAvgContainer,
  RatingsCount,
  RatingAvgNum,
  RatingAvgDescription
} from '../../../../../styles/ItemStyles/UserFeedbackSectionStyles';
import UserRating from './UserRating';


function RatingDetails() {
  const bag = useSelector(state => state.bag.bagDetails.bag);

  return (
    <RatingsDetailsContainer>
      <RatingsCountContainer>
        <RatingsCount>{bag.ratingsQuantity}</RatingsCount><S3>ratings</S3>
      </RatingsCountContainer>
      <RatingDetailsBody>
        {bag.ratingsQuantity !== 0 ?
          <RatingAvgContainer>
            <RatingAvgNum>{Math.round((bag.ratingsAverage)*1e2)/1e2}</RatingAvgNum>
            <RatingAvgDescription> Avg Rating</RatingAvgDescription>
          </RatingAvgContainer> : null
        }
        <UserRating/>
      </RatingDetailsBody>
    </RatingsDetailsContainer>
  );
}

export default RatingDetails;



