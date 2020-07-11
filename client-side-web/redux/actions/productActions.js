import { GET_MENU_ITEMS, GET_ERRORS, SET_MENU_ITEMS } from "./types";
import axios from "axios";

export const getMenuDetails = (restaurantName) => (dispatch) => {
  axios
    .get(`http://localhost:5000/test/all`)
    .then((res) => {
      const menu = res.data;
      localStorage.setItem("menuDetails", JSON.stringify(menu));

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

export const setMenu = (menu) => {
  return {
    type: SET_MENU_ITEMS,
    payload: menu,
  };
};
