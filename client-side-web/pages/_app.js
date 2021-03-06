import App from "next/app";
import React from "react";
import jwt_decode from "jwt-decode";
import { Provider } from "react-redux";
import store from "../redux/store";
import { createWrapper } from "next-redux-wrapper";
import setAuthToken from "../redux/utils/setAuthToken";
import { setCurrentUser } from "../redux/actions/authActions";
import { getMenuDetails } from "../redux/actions/productActions";

class MyApp extends App {
  componentDidMount() {
    // Check if token already in local storage
    if (localStorage.jwtToken) {
      // Set token header back
      setAuthToken(localStorage.jwtToken);
      // Decode token
      const decoded = jwt_decode(localStorage.jwtToken);
      // Set user and isAuthenticaed
      store.dispatch(setCurrentUser(decoded));
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps}></Component>
      </Provider>
    );
  }
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
