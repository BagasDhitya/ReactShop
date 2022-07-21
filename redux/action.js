export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const GET_PRODUCTS_IN_CART = 'GET_PRODUCTS_IN_CART';

export const getProducts = () => {
  dispatch({
    type: GET_PRODUCTS_IN_CART,
  });
};

export const addProduct = product => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: product,
  });
};

export const removeProduct = product => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: product,
  });
};
Footer;
