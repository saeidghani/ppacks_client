import React from 'react';
import { Avatar } from 'antd';

import {
  ReviewerContainer,
  AvatarAndUserNameContainer,
  Date,
} from '../../../../../styles/ItemStyles/UserFeedbackSectionStyles';
import withErrorHandler from '../../../../../common/hoc/withErrorHandler';
import ReviewerRating from './ReviewerRating';
import ReviewerHelpful from './ReviewerHelpful';


function Reviewer({ review }) {

  return (
    <ReviewerContainer>
      <AvatarAndUserNameContainer>
        <Avatar src={`/img/users/${review.user.photo}`}/>
        <span>{review.user.name}</span>
      </AvatarAndUserNameContainer>
      <ReviewerRating review={review} />
      <Date>{review.createdAt}</Date>
      <ReviewerHelpful review={review}/>
    </ReviewerContainer>
  );
}

export default withErrorHandler(Reviewer);
