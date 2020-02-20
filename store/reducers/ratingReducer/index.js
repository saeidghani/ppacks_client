import {combineReducers} from 'redux';
import newRatingReducer from './newRatingReducer';
import updatedRatingReducer from './updatedRatingReducer';

const ratingReducer = combineReducers({
  newRating: newRatingReducer,
  updatedRating: updatedRatingReducer
});

export default ratingReducer;