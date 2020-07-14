import { ADD_TO_CART, SET_CART_ITEMS } from "./types";

const addToCartUnsafe = (productId) => ({
  type: ADD_TO_CART,
  productId,
});

export const addOrderToCart = (productId) => (dispatch) => {
  dispatch(addToCartUnsafe(productId));
};

export const setOrderCart = (addedIds, quantityById) => {
  return {
    type: SET_CART_ITEMS,
    addedIds,
    quantityById,
  };
};
