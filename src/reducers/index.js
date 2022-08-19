import { combineReducers } from 'redux';
import userReducer from './user';
import productReducer from './product';
import productSellerReducer from './productSeller';
import categoryReducer from "./category";
import tawarReducer from './penawaran';
import message from './message';
import auth from './auth';

export default combineReducers({
  userReducer,
  productReducer,
  productSellerReducer,
  categoryReducer,
  tawarReducer,
  message,
  auth,
});
