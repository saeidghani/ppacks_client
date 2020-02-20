import React from 'react';
import {
  ReviewsHeaderContainer,
  Sort,
  SortBy
} from '../../../../styles/ItemStyles/UserFeedbackSectionStyles';
import SortDropDown from '../../../../common/comps/SortDropdown';


function ReviewsHeader({onSort}) {

  const menuOptions = [
    {title: 'newest', path: 'createdAt', order: 'desc', key: '1'},
    {title: 'oldest', path: 'createdAt', order: 'asc', key: '2'},
    {title: 'highest rating', path: 'rating', order: 'desc', key: '3'},
    {title: 'lowest rating', path: 'rating', order: 'asc', key: '4'}
  ];

  return (
    <ReviewsHeaderContainer>
      <Sort>
        <SortBy>Sort by:</SortBy>
        <SortDropDown menuOptions={menuOptions} onSort={onSort}/>
      </Sort>
    </ReviewsHeaderContainer>
  );
}

export default ReviewsHeader;
