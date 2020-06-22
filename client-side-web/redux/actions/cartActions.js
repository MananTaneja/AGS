import axios from "axios";
import { GET_MENU_ITEMS, ERROR_FETCH_MENU } from "./types";

export const initialMenu = () => {
  axios
    .get(`http://localhost:5000/mcdonalds/menudetails`)
    .then((res) =>
      dispatch({
        type: GET_MENU_ITEMS,
        menu: res,
      })
    )
    .catch((err) =>
      dispatch({
        type: ERROR_FETCH_MENU,
        data: "Error in fetching menu",
      })
    );
};
