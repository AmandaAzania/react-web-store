//  action types
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const REGISTER_USER = 'REGISTER_USER'; 
export const SET_SHIPPING_METHOD = 'SET_SHIPPING_METHOD';  

// Action creator for logging in
export const login = (user) => {
  return {
    type: LOGIN,
    payload: user,
  };
};

// Action creator for logging out
export const logout = () => {
  return {
    type: LOGOUT,
  };
};

// Action creators for cart actions
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

export const removeProduct = (productId) => {
  return {
    type: REMOVE_PRODUCT,
    payload: productId,
  };
};

// Action creator for user registration
export const registerUser = (userData) => {
  return {
    type: REGISTER_USER,
    payload: userData,
  };
};

// Action creator for setting shipping method
export const setShippingMethod = (method) => {
  return {
    type: SET_SHIPPING_METHOD,
    payload: method,
  };
};
