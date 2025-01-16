// rootReducer.js
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  // other reducers like userReducer, etc.
});

export default rootReducer;
