import { ADD_TO_CART, SET_CART_ITEMS, DELETE_FROM_CART } from "../actions/types";

const initialState = {
  addedIds: [],
  quantityById: {},
};

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state;
      }
      return [...state, action.productId];
    default:
      return state;
  }
};

const quantityById = (state = initialState.quantityById, action) => {
  //const productId = action.productId;
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [action.productId]: (state[action.productId] || 0) + 1,
      };
      case DELETE_FROM_CART:
      //const productId = action.productId;
      return {
        ...state,
        [action.productId]: ((state[action.productId])!==1 ? (state[action.productId]) - 1: 1),
      };
    default:
      return state;
  }
};

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0;

export const getAddedIds = (state) => state.addedIds;

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_ITEMS:
      return {
        ...state,
        addedIds: action.addedIds,
        quantityById: action.quantityById,
      };
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
      };
  }

  // const cartIds = addedIds(state.addedIds, action);
  // const cartQuant = quantityById(state.quantityById, action);

  // localStorage.setItem("cartIds", cartIds);
  // localStorage.setItem("cartQuant", cartQuant);

  // return {
  //   addedIds: cartIds,
  //   quantityById: cartQuant,
  // };
};

export default cartReducer;
