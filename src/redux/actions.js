export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const REGISTER_USER = 'REGISTER_USER';
export const SET_SHIPPING_METHOD = 'SET_SHIPPING_METHOD';

// Reusable function to update cart
const updateCart = (product, type) => {
  return {
    type,
    payload: product,
  };
};

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

// Action creators for cart actions using the reusable function
export const addToCart = (product) => updateCart(product, ADD_TO_CART);
export const removeFromCart = (productId) => updateCart({ id: productId }, REMOVE_FROM_CART);
export const removeProduct = (productId) => updateCart({ id: productId }, REMOVE_PRODUCT);

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
