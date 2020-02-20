import { REMOVE_FROM_CART } from '../../actionTypes';

const removeFromCartAction = bagId => ({
  type: REMOVE_FROM_CART,
  bagId
});

export const removeFromCart = bagId => dispatch => {
  let newCartItems;
  const cartItems = localStorage.getItem('cartItems');
  if (cartItems) {
    const cartItemsObj = JSON.parse(cartItems);
      newCartItems = cartItemsObj.filter(bag =>
      bag.bagId !== bagId
    );
  }
  localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  dispatch(removeFromCartAction(bagId));
};