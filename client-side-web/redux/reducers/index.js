import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer, * as fromCart from "./cartReducer";
import productReducer from "./productReducer";

export default combineReducers({
  auth: authReducer,
  cart: cartReducer,
  products: productReducer,
});

// const getAddedIds = state => fromCart.getAddedIds(state.cart);

// const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id);
