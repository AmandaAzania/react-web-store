const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        setTimeout(() => {
          // Clear the added message after 3 seconds
          return { ...state, addedMessage: '' };
        }, 3000);
        return {
          ...state,
          cart: [...state.cart, action.payload],
          addedMessage: `${action.payload.name} added to cart!`,
        };
      case REMOVE_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload),
          addedMessage: ''
        };
      default:
        return state;
    }
  };
  