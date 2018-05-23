import { ADD_TO_CART, CLEAR_CART, TOGGLE_CART } from '../actions/CartActions'
import { updateMockCart } from '../util/MockCartUtil'

export const initialState = {
  showCart: false,
  cart: {Items: [], Total: 0}
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART: {
      return {...state, showCart: !state.showCart}
    }
    case ADD_TO_CART: {
      console.log('ADD_TO_CART', action)
      const cart = updateMockCart(action.product, action.quantity, state.cart)
      return {...state, cart}
      // addToCart({product: action.product, quantity: action.quantity})
      // return state
    }
    case CLEAR_CART: {
      return {...state, cart: initialState.cart}
    }
    default: {
      return state
    }
  }
}

export default cartReducer
