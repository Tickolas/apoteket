import { ADD_TO_CART, CART_LOADED, CLEAR_CART, GET_CART, TOGGLE_CART } from '../actions/CartActions'
import { getCart } from '../util/ShopUtil'
import { updateMockCart } from '../util/MockCartUtil'

export const initialState = {
  showCart: false,
  cart: {Items: [], Total: 0}
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART: {
      getCart()
      return state
    }
    case CART_LOADED: {
      const cart = !Array.isArray(action.payload.cart) ? action.payload.cart : initialState.cart
      console.log('carty', !Array.isArray(action.payload.cart), cart)
      return {...state, cart}
    }
    case TOGGLE_CART: {
      return {...state, showCart: !state.showCart}
    }
    case ADD_TO_CART: {
      const cart = updateMockCart(action.product, action.quantity, state.cart)
      return {...state, cart}
      // TODO: Enable real API call
      // addToCart(action.product.Id, action.quantity)
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
