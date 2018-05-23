import {createStore} from 'redux'
import { TOGGLE_CART } from '../actions/CartActions'

const initialState = {
  showCart: false,
  cart: {Items: [], Total: 0}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART: {
      return {...state, showCart: !state.showCart}
    }
    default: {
      return state
    }
  }
}

const store = createStore(reducer)

export default store
