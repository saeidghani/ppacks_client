import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import * as Scroll from 'react-scroll';

import {
  Review,
  ReviewsContainer,
  ReviewsCount
} from '../../../../styles/ItemStyles/UserFeedbackSectionStyles';
import Line from '../../../../common/styled/Line';
import Pagination from '../../../../common/styled/Pagination';
import Reviewer from './Reviewer';
import ReviewsHeader from './ReviewsHeader';
import { fetchBagOrders } from '../../../../store/actions';
import useManageAndPaginateItems from './manageAndPaginateItems/useManageAndPaginateItems';
import Spinner from '../../../../common/comps/Spinner';
import withErrorHandler from '../../../../common/hoc/withErrorHandler';
import ReviewText from './ReviewText';


function UserFeedbackBody() {
  const ScrollElement = Scroll.Element;

  const dispatch = useDispatch();
  const onFetchBagOrders = (bagId) => dispatch(fetchBagOrders(bagId));
  const bagDetails = useSelector(state => state.bag.bagDetails.bag);
  const bagReviews = useSelector(state => state.review.bagReviews.reviews);
  const newReview = useSelector(state => state.review.newReview.review);
  const [totalItems, setTotalItems] = useState(0);
  const [dateFormattedReviews, setDateFormattedReviews] = useState([]);
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    if(bagReviews && bagReviews.length) {
      setAllReviews(bagReviews)
    }
  }, [bagReviews]);

  useEffect(() => {
    if(newReview) {
      setAllReviews(allReviews => [...allReviews, newReview])
    }
  }, [newReview]);

  useEffect(() => {
    if (bagDetails) onFetchBagOrders(bagDetails._id);
    if(renderedItems) setTotalItems(renderedItems.length);
  }, [bagDetails]);

  useEffect(() => {
    let dateFormattedReviews = [];
    allReviews.map(review => {
      const newReviewObj = {...review};
      newReviewObj.createdAt = moment(review.createdAt).format('MMMM DD, YYYY');
      dateFormattedReviews.push(newReviewObj);
    });
    setDateFormattedReviews(dateFormattedReviews);
  }, [allReviews]);

  const {
    handleManageItems, renderedItems,
    handlePageChange, pageSize, minValue, maxValue, currentPage
  } = useManageAndPaginateItems(dateFormattedReviews);

  if(!renderedItems) return <Spinner/>;
  if(!renderedItems.length) return <span></span>;

  return (
    <ScrollElement name='UserFeedbackBody'>
      <ReviewsContainer>
        <ReviewsCount>
          1-5 of {bagReviews.length} reviews
        </ReviewsCount>
        <ReviewsHeader onSort={filter => handleManageItems(filter)}/>
        {renderedItems.slice(minValue, maxValue).map(review => review.text &&
          <Review key={review._id}>
            <Reviewer review={review}/>
            <ReviewText review={review} />
            <Line/>
          </Review>
        )}
        <Pagination defaultCurrent={1}
                    current={currentPage}
                    pageSize={pageSize}
                    total={totalItems}
                    onChange={handlePageChange}/>
      </ReviewsContainer>
    </ScrollElement>
  );
}

export default withErrorHandler(UserFeedbackBody);
