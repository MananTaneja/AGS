import { ADD_TO_CART } from "./types";

const addToCartUnsafe = (productId) => ({
  type: ADD_TO_CART,
  productId,
});

export const addOrderToCart = (productId) => (dispatch) => {
  dispatch(addToCartUnsafe(productId));
};
