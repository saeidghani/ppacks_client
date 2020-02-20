import {
  ADD_TO_CART, REMOVE_FROM_CART
} from '../../actionTypes';
import { updateObject } from '../../../common/utils/storeUtils';

const initialState = {
  bags: []
};

const addToCart = (state, action) => {
  return updateObject(state, {
    bags: [...state.bags, action.bag]
  });
};

const removeFromCart = (state, action) => {
  return updateObject(state, {
    bags: state.bags.filter(bag =>
      bag.bagId !== action.bagId
    )
  });
};

const cartItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(state, action);
    case REMOVE_FROM_CART:
      return removeFromCart(state, action);
    default:
      return state;
  }
};

export default cartItemsReducer;