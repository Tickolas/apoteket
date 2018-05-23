import { TOGGLE_CART } from '../actions/CartActions'

export const initialState = {
  showCart: false,
  cart: {Items: [], Total: 0}
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART: {
      return {...state, showCart: !state.showCart}
    }
    default: {
      return state
    }
  }
}

export default cartReducer
