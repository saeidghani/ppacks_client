import {combineReducers} from 'redux';
import updatedUserReducer from './updatedUserReducer';

const userReducer = combineReducers({
  updatedUser: updatedUserReducer
});

export default userReducer;