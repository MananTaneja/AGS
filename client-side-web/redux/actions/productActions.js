import { GET_MENU_ITEMS, GET_ERRORS } from "./types";
import axios from "axios";

export const getMenuDetails = (restaurantName) => (dispatch) => {
  axios
    .get(`http://localhost:5000/${restaurantName}/menudetails`)
    .then((res) => {
      const menu = res.data;
      dispatch(getMenu(menu));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: "Error",
      })
    );
};

export const getMenu = (menu) => {
  return {
    type: GET_MENU_ITEMS,
    payload: menu,
  };
};
