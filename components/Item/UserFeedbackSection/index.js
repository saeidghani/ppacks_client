import React from 'react';

import {
  UserFeedbackSectionOuterBg,
  UserFeedbackSectionInnerBg
} from '../../../styles/ItemStyles/UserFeedbackSectionStyles';
import UserFeedbackHeader from './UserFeedbackHeader';
import UserFeedbackBody from './UserFeedbackBody';

function UserFeedbackSection() {

  return (
    <UserFeedbackSectionOuterBg>
      <UserFeedbackSectionInnerBg>
        <UserFeedbackHeader/>
        <UserFeedbackBody/>
      </UserFeedbackSectionInnerBg>
    </UserFeedbackSectionOuterBg>
  );
}

export default UserFeedbackSection;
