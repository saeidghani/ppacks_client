import {SET_CURRENT_COVER_IMG} from '../../actionTypes';

const setCurrentCoverImgAction = (currentCoverImg) => ({
  type: SET_CURRENT_COVER_IMG,
  currentCoverImg
});

export const setCurrentCoverImg = (img) => dispatch => {
  dispatch(setCurrentCoverImgAction(img));
};
