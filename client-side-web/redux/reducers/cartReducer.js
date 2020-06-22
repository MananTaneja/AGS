import { GET_MENU_ITEMS, ERROR_FETCH_MENU } from "../actions/types";

const initialState = {
  initialMenu: [],
  addedItems: [],
  cartTotal: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENU_ITEMS:
      return {
        ...state,
        initalMenu: action.payload.menu,
        addedItems: [],
        cartTotal: 0,
      };
    default:
      return state;
  }
};

export default cartReducer;
