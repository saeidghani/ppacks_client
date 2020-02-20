import {combineReducers} from 'redux';
import allBagsReducer from './allBagsReducer';
import bagDetailsReducer from './bagDetailsReducer';
import selectedBagsByCategoryReducer from './selectedBagsByCategoryReducer';
import selectedBagsByBrandReducer from './selectedBagsByBrandReducer';

const bagReducer = combineReducers({
  allBags: allBagsReducer,
  selectedBagsByCategory: selectedBagsByCategoryReducer,
  selectedBagsByBrand: selectedBagsByBrandReducer,
  bagDetails: bagDetailsReducer
});

export default bagReducer;