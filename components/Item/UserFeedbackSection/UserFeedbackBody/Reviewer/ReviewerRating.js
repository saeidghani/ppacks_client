import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  RateWrapper
} from '../../../../../styles/ItemStyles/UserFeedbackSectionStyles';
import StyledRate from '../../../../../common/styled/StyledRate';


function ReviewerRating({ review }) {
  const user = useSelector(state => state.auth.user);
  const orders = useSelector(state => state.order.bagOrders.orders);
  const newRating = useSelector(state => state.rating.newRating.rating);
  const updatedRating = useSelector(state => state.rating.updatedRating.rating);
  const reviewerId = review.user._id;
  const [isReviewOwner, setIsReviewOwner] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (user) {
      const isReviewOwner = reviewerId === user._id;
      setIsReviewOwner(isReviewOwner);
    } else {
      setIsReviewOwner(false);
    }
  }, [user]);

  useEffect(() => {
    if (review && review.rating) {
      setRating(review.rating);
    }
  }, []);

  useEffect(() => {
    if (isReviewOwner && newRating) {
      setRating(newRating.rating);
    }
  }, [isReviewOwner, newRating]);

  useEffect(() => {
    if (isReviewOwner && updatedRating) {
      setRating(updatedRating.rating);
    }
  }, [isReviewOwner, updatedRating]);

  return (
    <Fragment>
      {rating &&
      <Fragment>
        <RateWrapper>
          <StyledRate disabled allowHalf value={rating}/>
        </RateWrapper>
        <div>rated: {rating}</div>
      </Fragment>}
    </Fragment>
  );
}

export default ReviewerRating;
