import React from 'react';

import {
  UserFeedbackHeaderContainer
} from '../../../../styles/ItemStyles/UserFeedbackSectionStyles';
import RatingDetails from './RatingDetails';
import UserReview from './UserReview';

function UserFeedbackHeader() {

  return (
    <UserFeedbackHeaderContainer>
      <RatingDetails/>
      <UserReview/>
    </UserFeedbackHeaderContainer>
  );
}

export default UserFeedbackHeader;
