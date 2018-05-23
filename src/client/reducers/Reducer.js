import { createStore, combineReducers } from 'redux'
import { TOGGLE_CART } from '../actions/CartActions'
import { LOAD_PRODUCTS, PRODUCTS_LOADED } from '../actions/ProductActions'
import { getProducts } from '../util/ShopUtil'

const initialState = {
  cartReducer: {
    showCart: false,
    cart: {Items: [], Total: 0}
  },
  productsReducer: {
    products: []
  }
}

const cartReducer = (state = initialState.cartReducer, action) => {
  switch (action.type) {
    case TOGGLE_CART: {
      return {...state, showCart: !state.showCart}
    }
    default: {
      return state
    }
  }
}

const productsReducer = (state = initialState.productsReducer, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      getProducts().then(products => {
        store.dispatch({
          type: PRODUCTS_LOADED,
          products
        })
      })
      return state
    }
    case PRODUCTS_LOADED: {
      return {...state, products: action.products}
    }
    default: {
      return state
    }
  }
}

const store = createStore(
  combineReducers({cartReducer, productsReducer}),
  initialState
)

export default store
