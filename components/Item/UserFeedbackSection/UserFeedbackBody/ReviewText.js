import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


function ReviewText({ review }) {
  const user = useSelector(state => state.auth.user);
  const newReview = useSelector(state => state.review.newReview.review);
  const updatedReview = useSelector(state => state.review.updatedReview.review);
  const reviewerId = review.user._id;
  const [isReviewOwner, setIsReviewOwner] = useState(false);
  const [reviewText, setReviewText] = useState(0);

  useEffect(() => {
    if (user) {
      const isReviewOwner = reviewerId === user._id;
      setIsReviewOwner(isReviewOwner);
    } else {
      setIsReviewOwner(false);
    }
  }, [user]);

  useEffect(() => {
    if (review) {
      setReviewText(review.text);
    }
  }, []);

  useEffect(() => {
    if (isReviewOwner && newReview) {
      setReviewText(newReview.review);
    }
  }, [isReviewOwner, newReview]);

  useEffect(() => {
    if (isReviewOwner && updatedReview) {
      setReviewText(updatedReview.text);
    }
  }, [isReviewOwner, updatedReview]);

  return (
    <div>
      {reviewText}
    </div>
  );
}

export default ReviewText;
