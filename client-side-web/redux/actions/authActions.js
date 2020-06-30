import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const loginUser = (userData) => (dispatch) => {
  axios
    .post(`http://localhost:5000/login`, userData)
    .then((res) => {
      // Save to local storage
      const token = res.data.token;
      // Setting token to local storage
      localStorage.setItem("jwtToken", token);
      // Set token to auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current User
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: "Error",
      })
    );
};

// Set logged in user

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const logoutUser = () => (dispatch) => {
  // Removing token from localstorage
  localStorage.removeItem("jwtToken");
  // Removing auth headers being passed after login
  setAuthToken(false);
  // Set current user to empty object -> to set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

// Precious code below
//fetch("http://localhost:5000/login", {
//   method: "post",
//   headers: {
//     Accept: "application/json, text/plain, */*",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(userData),
// })
//   .then((res) => res.json())
//   .then(
//     (data) => {
//       const token = data.token;
//       localStorage.setItem("jwtToken", token);
//       setAuthToken(token);
//       const decoded = jwt_decode(token);
//       dispatch(setCurrentUser(decoded));
//     },
//     (err) =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: "Error",
//       })
//   );
