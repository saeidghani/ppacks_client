import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from 'antd';

import {
  ReviewerContainer,
  AvatarAndUserNameContainer,
  Date,
  HelpfulCount,
  HelpfulButton
} from '../../../../../styles/ItemStyles/UserFeedbackSectionStyles';
import { ButtonOutline, ButtonFilled } from '../../../../../common/styled/Button';
import useRedirectToSignInPage from '../../../../../common/hooks/useRedirectToSignInPage';
import { updateReview } from '../../../../../store/actions';
import withErrorHandler from '../../../../../common/hoc/withErrorHandler';
import { itemPage } from '../../../../../common/urls';
import ReviewerRating from './ReviewerRating';


function Reviewer({ review }) {
  const dispatch = useDispatch();
  const onUpdateReview = (reviewId, updatedReview) => dispatch(updateReview(reviewId, updatedReview));
  const user = useSelector(state => state.auth.user);
  const updatedReview = useSelector(state => state.review.updatedReview.review);
  const bagId = review.bag;
  const reviewerId = review.user._id;
  const [isReviewOwner, setIsReviewOwner] = useState(false);
  const [helpfulBy, setHelpfulBy] = useState(false);
  const [helpfulIncludesUser, setHelpfulIncludesUser] = useState(false);

  useEffect(() => {
    if (user) {
      const isReviewOwner = reviewerId === user._id;
      setIsReviewOwner(isReviewOwner);
    } else {
      setIsReviewOwner(false);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const helpfulIncludesUser = review && review.helpfulBy.includes(user._id);
      setHelpfulIncludesUser(helpfulIncludesUser);
    }
    const helpfulBy = review.helpfulBy;
    setHelpfulBy(helpfulBy);
  }, []);

  useEffect(() => {
    if (helpfulBy && user) {
      const helpfulIncludesUser = helpfulBy.includes(user._id);
      setHelpfulIncludesUser(helpfulIncludesUser);
    }
  }, [helpfulBy, isReviewOwner]);

  const redirectToSignInPage = useRedirectToSignInPage(`${itemPage}?itemId=${bagId}`);

  const handleHelpfulClick = () => {
    if (!user) {
      redirectToSignInPage();
    } else {
      let newHelpfulBy;
      if (helpfulIncludesUser) {
        newHelpfulBy = review.helpfulBy.filter(userId =>
          userId !== user._id
        );
      } else {
        newHelpfulBy = [...review.helpfulBy, user._id];
      }
      setHelpfulBy(newHelpfulBy);
      onUpdateReview(
        review._id,
        { helpfulBy: newHelpfulBy }
      );
    }
  };

  let helpfulButton;
  if (!isReviewOwner) {
    if (helpfulIncludesUser) {
      helpfulButton = <ButtonFilled onClick={handleHelpfulClick}>Helpful</ButtonFilled>;
    } else {
      helpfulButton = <ButtonOutline onClick={handleHelpfulClick}>Helpful</ButtonOutline>;
    }
  }

  return (
    <ReviewerContainer>
      <AvatarAndUserNameContainer>
        <Avatar src={`/img/users/${review.user.photo}`}/>
        <span>{review.user.name}</span>
      </AvatarAndUserNameContainer>
      <ReviewerRating review={review} />
      <Date>{review.createdAt}</Date>
      <HelpfulCount>{helpfulBy.length} people found this helpful</HelpfulCount>
      <HelpfulButton>
        {helpfulButton}
      </HelpfulButton>
    </ReviewerContainer>
  );
}

export default withErrorHandler(Reviewer);
