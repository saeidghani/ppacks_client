import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  RatingButtonOutline,
  UserRatingContainer
} from '../../../../../styles/ItemStyles/UserFeedbackSectionStyles';
import StyledRate from '../../../../../common/styled/StyledRate';
import { addRating, updateRating } from '../../../../../store/actions';
import useRedirectToSignInPage from '../../../../../common/hooks/useRedirectToSignInPage';
import withErrorHandler from '../../../../../common/hoc/withErrorHandler';
import {itemPage} from '../../../../../common/urls';


function UserRating() {
  const dispatch = useDispatch();
  const onAddRating = newRating => dispatch(addRating(newRating));
  const onUpdateRating = (reviewId, updatedRating) => dispatch(updateRating(reviewId, updatedRating));
  const bag = useSelector(state => state.bag.bagDetails.bag);
  const user = useSelector(state => state.auth.user);
  const bagReviews = useSelector(state => state.review.bagReviews.reviews);
  const newRating = useSelector(state => state.rating.newRating.rating);
  const [userPreviousReview, setUserPreviousReview] = useState(false);
  const [userPreviousRating, setUserPreviousRating] = useState(false);

  useEffect(() => {
    if (user) {
      const userPreviousReview = bagReviews && bagReviews.find(review =>
        review.user._id === user._id
      );
      if(userPreviousReview) {
        setUserPreviousReview(userPreviousReview);
        if(userPreviousReview.rating) {
          setUserPreviousRating(userPreviousReview.rating);
        }
      }
    }
  }, [user, bagReviews]);

  const handleSetRating = value => {
    if (userPreviousRating) {
      onUpdateRating(
        userPreviousReview._id,
        { rating: value }
      );
    } else {
      onAddRating({
        user: user._id,
        bag: bag._id,
        rating: value
      });
      const newRatingCopy = { ...newRating };
      setUserPreviousRating(newRatingCopy.rating);
    }
  };

  const redirectToSignInPage = useRedirectToSignInPage(`${itemPage}?itemId=${bag._id}`);

  const renderUserRating = () => {
    if (user) {
      if (userPreviousRating) {
        return (
          <UserRatingContainer>
            <h3>Your rating: {Number(userPreviousRating).toFixed(1)}</h3>
            <StyledRate allowHalf onChange={handleSetRating} value={userPreviousRating}/>
          </UserRatingContainer>
        );
      } else {
        return (
          <UserRatingContainer>
            <h3>Add Your rating</h3>
            <StyledRate allowHalf onChange={handleSetRating}/>
          </UserRatingContainer>
        );
      }
    } else {
      return (
        <UserRatingContainer>
          <RatingButtonOutline onClick={redirectToSignInPage}>Rate it</RatingButtonOutline>
        </UserRatingContainer>
      );
    }
  };

  return (
    <Fragment>
      {renderUserRating()}
    </Fragment>
  );
}

export default withErrorHandler(UserRating);



