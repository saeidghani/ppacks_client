import {
  SHOW_CART_DRAWER
} from '../../actionTypes';
import { updateObject } from '../../../common/utils/storeUtils';

const initialState = {
  visible: false
};

const showCartDrawer = (state, action) => {
  return updateObject(state, {
    visible: action.cartDrawerVisibility
  });
};

const cartDrawerVisibilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CART_DRAWER:
      return showCartDrawer(state, action);
    default:
      return state;
  }
};

export default cartDrawerVisibilityReducer;