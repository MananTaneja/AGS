import { ADD_TO_CART } from "./types";

// export const addOrderToCart = (productId) => (dispatch) => {
//   return {
//     type: ADD_TO_CART,
//     payload: productId,
//   };
// };

const addToCartUnsafe = (productId) => ({
  type: ADD_TO_CART,
  productId,
});

export const addOrderToCart = (productId) => (dispatch) => {
  dispatch(addToCartUnsafe(productId));
};
