import { ADD_TO_CART } from "../actions/types";

const initialState = {
  addedIds: [],
  quantityById: {},
};

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // if (state.indexOf(action.productId) !== -1) {
      //   return state;
      // }
      return [...state, action.productId];
    default:
      return state;
  }
};

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const productId = action.productId;
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1,
      };
    default:
      return state;
  }
};

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0;

export const getAddedIds = (state) => state.addedIds;

const cartReducer = (state = initialState, action) => {
  return {
    addedIds: addedIds(state.addedIds, action),
    quantityById: quantityById(state.quantityById, action),
  };
};

export default cartReducer;
