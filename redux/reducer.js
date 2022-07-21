import {ADD_TO_CART, REMOVE_FROM_CART} from './actions';

const initialState = {
  cart: [],
  message: 'hello',
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, cart: [...state.cart, {...action.payload}]};
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
