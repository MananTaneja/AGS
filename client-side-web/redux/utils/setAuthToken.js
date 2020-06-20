import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    // Set the token for every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete Auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
