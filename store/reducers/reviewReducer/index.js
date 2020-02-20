import {combineReducers} from 'redux';
import bagReviewsReducer from './bagReviewsReducer';
import newReviewReducer from './newReviewReducer';
import updatedReviewReducer from './updatedReviewReducer';

const reviewReducer = combineReducers({
  bagReviews: bagReviewsReducer,
  newReview: newReviewReducer,
  updatedReview: updatedReviewReducer
});

export default reviewReducer;