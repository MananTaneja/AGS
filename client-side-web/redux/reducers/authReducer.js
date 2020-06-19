const initialState = {
  isAuthenticated: false,
  user: {},
  hello: "test",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // case SET_CURRENT_USER:
    default:
      return state;
  }
};

export default authReducer;
