import { LOAD_PRODUCTS, PRODUCTS_LOADED } from '../actions/ProductActions'
import { getProducts } from '../util/ShopUtil'

export const initialState = {
  products: []
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      getProducts()
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

export default productsReducer
