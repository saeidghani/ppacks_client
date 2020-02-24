import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  RatingButtonOutline,
  UserRatingContainer
} from '../../../../../styles/ItemStyles/UserFeedbackSectionStyles';
import StyledRate from '../../../../../common/styled/StyledRate';
import { addRating, updateRating, fetchBagReviews } from '../../../../../store/actions';
import useRedirectToSignInPage from '../../../../../common/hooks/useRedirectToSignInPage';
import withErrorHandler from '../../../../../common/hoc/withErrorHandler';
import {itemPage} from '../../../../../common/urls';


function UserRating() {
  const dispatch = useDispatch();
  const onAddRating = newRating => dispatch(addRating(newRating));
  const onUpdateRating = (reviewId, updatedRating) => dispatch(updateRating(reviewId, updatedRating));
  const onFetchBagReviews = bagId => dispatch(fetchBagReviews(bagId));
  const bag = useSelector(state => state.bag.bagDetails.bag);
  const user = useSelector(state => state.auth.user);
  const bagReviews = useSelector(state => state.review.bagReviews.reviews);
  const newReview = useSelector(state => state.review.newReview.review);
  const newRating = useSelector(state => state.rating.newRating.rating);
  const [userReview, setUserReview] = useState(false);
  const [userRating, setUserRating] = useState(false);
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    if(bagReviews && bagReviews.length) {
      setAllReviews(bagReviews)
    }
  }, [bagReviews]);

  useEffect(() => {
    if(newRating) {
      setAllReviews(allReviews => [...allReviews, newRating])
    }
    if(newReview) {
      setAllReviews(allReviews => [...allReviews, newReview])
    }
  }, [newRating, newReview]);

  useEffect(() => {
    if (user && allReviews && allReviews.length) {
      const userReview = allReviews.find(review =>
        ((review.user._id === user._id) || (review.user === user._id))
      );
      setUserReview(userReview);
      if(userReview && userReview.rating) {
          setUserRating(userReview.rating);
      }
    }
  }, [user, allReviews]);

  const handleSetRating = value => {
    if (userReview) {
      onUpdateRating(
        userReview._id,
        { rating: value }
      );
    } else {
      onAddRating({
        user: user._id,
        bag: bag._id,
        rating: value
      });
      onFetchBagReviews(bag._id);
    }
    setUserRating(value);
  };

  const redirectToSignInPage = useRedirectToSignInPage(`${itemPage}?itemId=${bag._id}`);

  const renderUserRating = () => {
    if (user) {
      if (userRating) {
        return (
          <UserRatingContainer>
            <h3>Your rating: {Number(userRating).toFixed(1)}</h3>
            <StyledRate allowHalf onChange={handleSetRating} value={userRating}/>
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



