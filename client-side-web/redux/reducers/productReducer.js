import { GET_MENU_ITEMS, SET_MENU_ITEMS } from "../actions/types";
const initialstate = {
  menuDetails: {
    id: {},
    MenuItem: {},
    ItemPrice: {},
    Catergory: {},
  },
};

const productReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_MENU_ITEMS:
      return {
        ...state,
        menuDetails: action.payload,
      };
    case SET_MENU_ITEMS:
      return {
        ...state,
        menuDetails: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
