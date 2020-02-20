import defaultFilterReducer from './defaultFilterReducer';
import {combineReducers} from 'redux';

const itemsListReducer = combineReducers({
  defaultFilter: defaultFilterReducer,
});

export default itemsListReducer;

