import currentCoverImgReducer from './currentCoverImgReducer';
import {combineReducers} from 'redux';

const imageReducer = combineReducers({
  currentCoverImg: currentCoverImgReducer,
});

export default imageReducer;

