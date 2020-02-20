import React, { useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Scroll from 'react-scroll';

import {ItemContainer, Main} from '../../styles/ItemStyles';
import Breadcrumb from '../../common/comps/Breadcrumb';
import ItemInfoSection from './ItemInfoSection';
import UserFeedbackSection from './UserFeedbackSection';
import { fetchBagDetails, fetchBagReviews, setItemsListDefaultFilter } from '../../store/actions';
import Spinner from '../../common/comps/Spinner';
import withErrorHandler from '../../common/hoc/withErrorHandler';
import useDefaultFilter from '../../common/hooks/useDefaultFilter';

function Item({defaultFilter}) {
  const {categoryId, brandId, itemId} = defaultFilter;
  const defaultFilterState = useSelector(state => state.itemsList.defaultFilter.filter);
  const dispatch = useDispatch();
  const onSetItemsListDefaultFilter = filter => dispatch(setItemsListDefaultFilter(filter));
  const onFetchBagDetails = (itemId) => dispatch(fetchBagDetails(itemId));
  const onFetchBagReviews = (itemId) => dispatch(fetchBagReviews(itemId));
  const bag = useSelector(state => state.bag.bagDetails.bag);
  const newReview = useSelector(state => state.review.newReview.review);
  const updatedReview = useSelector(state => state.review.updatedReview.review);
  const newRating = useSelector(state => state.rating.newRating.rating);
  const updatedRating = useSelector(state => state.rating.updatedRating.rating);

  const {itemsFilter} = useDefaultFilter(defaultFilter);

  useEffect(() => {
    const scroll = Scroll.animateScroll;
    const scrollToTop = () => scroll.scrollTo(100, {smooth: true, duration: 1500,});
    scrollToTop();
  }, []);

  useEffect(() => {
    onSetItemsListDefaultFilter(defaultFilter);
    onFetchBagDetails(itemId);
    onFetchBagReviews(itemId);
  }, [newReview, updatedReview, newRating, updatedRating, defaultFilterState]);

  if(!bag) return <Spinner/>;

  const breadcrumbOptions = [
    { title: 'Home', href: '/' },
    { title: itemsFilter, href: '/itemsPage' },
    { title: bag.title }
  ];

  return (
    <ItemContainer>
      <Breadcrumb pages={breadcrumbOptions}/>
      <Main>
        <ItemInfoSection />
        <UserFeedbackSection/>
      </Main>
    </ItemContainer>
  );
};

export default withErrorHandler(Item);
