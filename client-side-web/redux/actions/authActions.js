import { TEST_DISPATCH } from "./types";

export const loginUser = (userData) => {
  return {
    type: TEST_DISPATCH,
    payload: userData,
  };
};
