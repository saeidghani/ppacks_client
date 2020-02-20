import React from 'react';
import { useSelector } from 'react-redux';
import * as Scroll from 'react-scroll';

import {
  ItemReviewsContainer
}
  from '../../../../styles/ItemStyles/ItemInfoSectionStyles/ItemInfoDetailsStyles';

function ItemReviews() {
  const bagReviews = useSelector(state => state.review.bagReviews.reviews);

  let scroller = Scroll.scroller;

  const scrollTo = () => scroller.scrollTo('UserFeedbackBody', {
    duration: 1000,
    smooth: true
  });

  if (!bagReviews) return <h3>Loading...</h3>;

  return (
    <ItemReviewsContainer onClick={scrollTo}>Read All {bagReviews.length} Reviews</ItemReviewsContainer>
  );
}

export default ItemReviews;

