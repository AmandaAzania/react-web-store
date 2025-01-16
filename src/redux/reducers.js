import { LOGIN, LOGOUT, ADD_TO_CART, REMOVE_FROM_CART, REMOVE_PRODUCT, REGISTER_USER, SET_SHIPPING_METHOD } from './actions';

const initialState = {
  isLoggedIn: false,
  user: null,
  cart: [],
  shippingMethod: 'standard',  // Default shipping method
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case ADD_TO_CART:
      const existingProduct = state.cart.find(item => item.id === action.payload.id);
      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,  // Store the registered user
      };
    case SET_SHIPPING_METHOD:
      return {
        ...state,
        shippingMethod: action.payload,  // Update the shipping method
      };
    default:
      return state;
  }
};

export default reducer;
