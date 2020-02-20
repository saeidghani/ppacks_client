import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from 'antd';
import moment from 'moment';

import {
  ReviewerContainer,
  AvatarAndUserNameContainer,
  SizeAndColorContainer,
  RateWrapper,
  Date,
  HelpfulCount,
  HelpfulButton
} from '../../../../styles/ItemStyles/UserFeedbackSectionStyles';
import StyledRate from '../../../../common/styled/StyledRate';
import { ButtonOutline, ButtonFilled } from '../../../../common/styled/Button';
import useRedirectToSignInPage from '../../../../common/hooks/useRedirectToSignInPage';
import { updateReview } from '../../../../store/actions';
import withErrorHandler from '../../../../common/hoc/withErrorHandler';


function Reviewer({ review }) {
  const dispatch = useDispatch();
  const onUpdateReview = (reviewId, updatedReview) => dispatch(updateReview(reviewId, updatedReview));
  const user = useSelector(state => state.auth.user);
  const orders = useSelector(state => state.order.bagOrders.orders);
  const newRating = useSelector(state => state.rating.newRating.rating);
  const updatedRating = useSelector(state => state.rating.updatedRating.rating);
  const bagId = review.bag;
  const reviewerId = review.user._id;
  const [isReviewOwner, setIsReviewOwner] = useState(false);
  const [helpfulBy, setHelpfulBy] = useState(false);
  const [helpfulIncludesUser, setHelpfulIncludesUser] = useState(false);
  const [reviewerOrder, setReviewerOrder] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    let reviewerOrder;
    if (orders) {
      reviewerOrder = orders.find(order =>
        order.user._id === reviewerId
      );
    }
    if (reviewerOrder) setReviewerOrder(reviewerOrder);
    if (user) {
      const isReviewOwner = reviewerId === user._id;
      if (isReviewOwner) setIsReviewOwner(isReviewOwner);

      const helpfulIncludesUser = review && review.helpfulBy.includes(user._id);
      if (helpfulIncludesUser) setHelpfulIncludesUser(helpfulIncludesUser);
    }
    const helpfulBy = review.helpfulBy;
    setHelpfulBy(helpfulBy);
  }, [orders, user]);

  useEffect(() => {
    if (!isReviewOwner && review && review.rating) {
      setRating(review.rating)
    }
  }, [isReviewOwner]);

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


  const redirectToSignInPage = useRedirectToSignInPage(`/itemPage?itemId=${bagId}`);

  const handleHelpfulClick = () => {
    let helpfulBy;
    if (!user) {
      redirectToSignInPage();
    } else {
      if (helpfulIncludesUser) {
        helpfulBy = review.helpfulBy.filter(userId =>
          userId !== user._id
        );
        setHelpfulBy(helpfulBy);
      } else {
        helpfulBy = [...review.helpfulBy, user._id];
        setHelpfulBy(helpfulBy);
      }
    }

    onUpdateReview(
      review._id,
      { helpfulBy }
    );
    setHelpfulIncludesUser(!helpfulIncludesUser);
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
      {reviewerOrder &&
      <SizeAndColorContainer right='1rem'>
        <span>Size: {reviewerOrder.size} </span>
        <span>|</span>
        <span>Color: {reviewerOrder.color.colorName}</span>
      </SizeAndColorContainer>}
      {rating && <RateWrapper>
        <StyledRate disabled allowHalf defaultValue={rating}/>
      </RateWrapper>}
      {rating && <div>rated: {rating}</div>}
      <Date>{review.createdAt}</Date>
      <HelpfulCount>{helpfulBy.length} people found this helpful</HelpfulCount>
      <HelpfulButton>
        {helpfulButton}
      </HelpfulButton>
    </ReviewerContainer>
  );
}

export default withErrorHandler(Reviewer);
