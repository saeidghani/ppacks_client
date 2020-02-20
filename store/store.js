import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import authReducer from './reducers/userReducer/authReducer';
import userReducer from './reducers/userReducer';
import bagReducer from './reducers/bagReducer/index';
import reviewReducer from './reducers/reviewReducer';
import ratingReducer from './reducers/ratingReducer';
import orderReducer from './reducers/orderReducer';
import cartReducer from './reducers/cartReducer';
import imageReducer from './reducers/imageReducer';
import ItemsListReducer from './reducers/ItemsListReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  bag: bagReducer,
  review: reviewReducer,
  rating: ratingReducer,
  order: orderReducer,
  cart: cartReducer,
  image: imageReducer,
  itemsList: ItemsListReducer
});

export const store = (initialState = {}) => {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
};
