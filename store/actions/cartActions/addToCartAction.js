import { ADD_TO_CART } from '../../actionTypes';

const addToCartAction = bag => ({
  type: ADD_TO_CART,
  bag
});

export const addToCart = bag => dispatch => {
  let newCartItems = [bag];
  const cartItems = localStorage.getItem('cartItems');
  if (cartItems) {
    const cartItemsObj = JSON.parse(cartItems);
    newCartItems = [...cartItemsObj, bag];
  }
  localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  dispatch(addToCartAction(bag));
};

export const checkCartState = () => (dispatch, getState) => {
  const cartItemsState = getState().cart.cartItems.bags;
  const cartItems = localStorage.getItem('cartItems');
  const cartItemsObj = JSON.parse(cartItems);
  if (cartItemsObj && (cartItemsState.length < cartItemsObj.length)) {
    cartItemsObj.map(addedBag =>
      dispatch(addToCartAction(addedBag))
    );
  }
};