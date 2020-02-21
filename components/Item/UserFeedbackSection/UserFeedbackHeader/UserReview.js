import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  UserReviewContainer, ReviewButtonFilled, ReviewButtonOutline, ReviewError, S3
} from '../../../../styles/ItemStyles/UserFeedbackSectionStyles';
import { StyledInput } from '../../../../common/styled/StyledInput';
import { addReview, updateReview } from '../../../../store/actions';
import useRedirectToSignInPage from '../../../../common/hooks/useRedirectToSignInPage';
import withErrorHandler from '../../../../common/hoc/withErrorHandler';
import {itemPage} from '../../../../common/urls';


function UserReview() {
  const dispatch = useDispatch();
  const onAddReview = newReview => dispatch(addReview(newReview));
  const onUpdateReview = (reviewId, updatedReview) => dispatch(updateReview(reviewId, updatedReview));
  const newReview = useSelector(state => state.review.newReview.review);
  const bag = useSelector(state => state.bag.bagDetails.bag);
  const bagReviews = useSelector(state => state.review.bagReviews.reviews);
  const user = useSelector(state => state.auth.user);

  const [reviewText, setReviewText] = useState('');
  const [reviewTextError, setReviewTextError] = useState('');
  const [userPreviousReview, setUserPreviousReview] = useState(false);

  useEffect(() => {
    if (user) {
      const userPreviousReview = bagReviews && bagReviews.find(review =>
        review.user._id === user._id
      );
      setUserPreviousReview(userPreviousReview);
      if (userPreviousReview) {
        setReviewText(userPreviousReview.text);
      }
    }
  }, [bagReviews]);

  const redirectToSignInPage = useRedirectToSignInPage(`${itemPage}?itemId=${bag._id}`);

  const handleReviewChange = ({ currentTarget }) => {
    setReviewText(currentTarget.value);
  };

  const handleSetReview = () => {
    if (userPreviousReview) {
      if (reviewText) {
        setReviewTextError('');
        onUpdateReview(
          userPreviousReview._id,
          { text: reviewText }
        );
      } else {
        setReviewTextError('review can not be empty!');
      }
    } else {
      if (reviewText) {
        setReviewTextError('');
        onAddReview({
          user: user._id,
          bag: bag._id,
          text: reviewText,
          helpfulBy: []
        });
      } else {
        setReviewTextError('review can not be empty!');
      }

      const newReviewCopy = { ...newReview };
      setUserPreviousReview(newReviewCopy);
    }
  };

  const renderUserReview = () => {
    if (user) {
      if (userPreviousReview && userPreviousReview.text) {
        return (<UserReviewContainer>
          <ReviewButtonFilled onClick={handleSetReview}>Update review</ReviewButtonFilled>
          {reviewTextError && <ReviewError>{reviewTextError}</ReviewError>}
          <StyledInput onChange={handleReviewChange} value={reviewText}/>
        </UserReviewContainer>);
      } else {
        return (<UserReviewContainer>
          <ReviewButtonOutline onClick={handleSetReview}>Add review</ReviewButtonOutline>
          {reviewTextError && <ReviewError>{reviewTextError}</ReviewError>}
          <StyledInput onChange={handleReviewChange}/>
        </UserReviewContainer>);
      }
    } else {
      return (<UserReviewContainer>
        <ReviewButtonOutline onClick={redirectToSignInPage}>Add review</ReviewButtonOutline>
        <S3>Share your thoughts with other customers</S3>
      </UserReviewContainer>);
    }
  };

  return (
    <Fragment>
      {renderUserReview()}
    </Fragment>
  );
}

export default withErrorHandler(UserReview);



