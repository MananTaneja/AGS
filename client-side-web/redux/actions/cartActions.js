import { ADD_TO_CART, SET_CART_ITEMS,DELETE_FROM_CART } from "./types";

const addToCartUnsafe = (productId) => ({
  type: ADD_TO_CART,
  productId,
});

const deleteFromCartUnsafe = (productId) => ({
  type: DELETE_FROM_CART,
  productId,
});

export const addOrderToCart = (productId) => (dispatch) => {
  dispatch(addToCartUnsafe(productId));
};

export const deleteOrderFromCart = (productId) => (dispatch) => {
  dispatch(deleteFromCartUnsafe(productId));
};

export const setOrderCart = (addedIds, quantityById) => {
  return {
    type: SET_CART_ITEMS,
    addedIds,
    quantityById,
  };
};
