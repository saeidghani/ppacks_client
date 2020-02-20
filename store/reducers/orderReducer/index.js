import {combineReducers} from 'redux';
import bagOrdersReducer from './bagOrdersReducer';
import newOrderReducer from './newOrderReducer';

const orderReducer = combineReducers({
  bagOrders: bagOrdersReducer,
  newOrder: newOrderReducer
});

export default orderReducer;