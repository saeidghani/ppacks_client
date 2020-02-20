import {
  SET_CURRENT_COVER_IMG
} from '../../actionTypes';
import { updateObject } from '../../../common/utils/storeUtils';

const initialState = {
  image: ''
};

const setCurrentCoverImg = (state, action) => {
  return updateObject(state, {
    image: action.currentCoverImg
  });
};

const currentCoverImgReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_COVER_IMG:
      return setCurrentCoverImg(state, action);
    default:
      return state;
  }
};

export default currentCoverImgReducer;