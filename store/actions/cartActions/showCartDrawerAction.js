import {SHOW_CART_DRAWER} from '../../actionTypes';

const showCartDrawerAction = (cartDrawerVisibility) => ({
  type: SHOW_CART_DRAWER,
  cartDrawerVisibility
});

export const showCartDrawer = () => (dispatch, getState) => {
  const cartDrawerVisibility = getState().cart.cartDrawerVisibility.visible;
  dispatch(showCartDrawerAction(!cartDrawerVisibility));
};
