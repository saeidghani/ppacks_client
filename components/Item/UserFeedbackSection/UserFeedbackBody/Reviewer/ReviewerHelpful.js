import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  HelpfulCount,
  HelpfulButton
} from '../../../../../styles/ItemStyles/UserFeedbackSectionStyles';
import { ButtonOutline, ButtonFilled } from '../../../../../common/styled/Button';
import useRedirectToSignInPage from '../../../../../common/hooks/useRedirectToSignInPage';
import { updateReview } from '../../../../../store/actions';
import withErrorHandler from '../../../../../common/hoc/withErrorHandler';
import { itemPage } from '../../../../../common/urls';


function ReviewerHelpful({ review }) {
  const dispatch = useDispatch();
  const onUpdateReview = (reviewId, updatedReview) => dispatch(updateReview(reviewId, updatedReview));
  const user = useSelector(state => state.auth.user);
  const bagDetails = useSelector(state => state.bag.bagDetails.bag);
  const bagId = review.bag;
  const reviewerId = review.user._id;
  const [isReviewOwner, setIsReviewOwner] = useState(false);
  const [helpfulBy, setHelpfulBy] = useState(false);
  const [helpfulIncludesUser, setHelpfulIncludesUser] = useState(false);

  useEffect(() => {
    if (user && (review.user._id === user._id)) {
      setIsReviewOwner(true);
    } else {
      setIsReviewOwner(false);
    }
  }, [user]);

  useEffect(() => {
    setHelpfulBy(review.helpfulBy);
  }, []);

  useEffect(() => {
    if (user && helpfulBy) {
      setHelpfulIncludesUser(
        bool => helpfulBy.includes(user._id)
      )
    }
    }, [user, helpfulBy]);

  const redirectToSignInPage = useRedirectToSignInPage(`${itemPage}?itemId=${bagDetails._id}`);

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
    if (user && helpfulIncludesUser) {
      helpfulButton = <ButtonFilled onClick={handleHelpfulClick}>Helpful</ButtonFilled>;
    } else {
      helpfulButton = <ButtonOutline onClick={handleHelpfulClick}>Helpful</ButtonOutline>;
    }
  }

  return (
    <Fragment>
      <HelpfulCount>{helpfulBy.length} people found this helpful</HelpfulCount>
      {helpfulButton}
    </Fragment>
  );
}

export default ReviewerHelpful;
