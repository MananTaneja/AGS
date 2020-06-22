import { GET_MENU_ITEMS } from "./types";
import axios from "axios";

export const getMenuDetails = () => (dispatch) => {
  axios
    .get(`http://localhost:50000/mcdonalds/menudetails`)
    .then((res) => {})
    .catch((err) => console.log(err));
};
