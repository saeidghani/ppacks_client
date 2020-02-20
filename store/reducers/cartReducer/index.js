import cartItemsReducer from './cartItemsReducer';
import cartDrawerVisibilityReducer from './cartDrawerVisibilityReducer';
import {combineReducers} from 'redux';

const cartReducer = combineReducers({
  cartItems: cartItemsReducer,
  cartDrawerVisibility: cartDrawerVisibilityReducer
});

export default cartReducer;

