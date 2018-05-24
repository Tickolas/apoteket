import axios from 'axios'
import store from '../Store'
import { PRODUCTS_LOADED } from '../actions/ProductActions'
import { CART_LOADED } from '../actions/CartActions'

const getProducts = () => {
  return axios.get('http://apoteket-uppgift-fe.ginzburg.it/api/products').then((result) => {
    store.dispatch({
      type: PRODUCTS_LOADED,
      products: result.data
    })
  })
}

const getCart = () => {
  return axios.get('http://apoteket-uppgift-fe.ginzburg.it/api/cart',
    {headers: { 'X-Key': 'qwerty' }}).then((result) => {
    const cart = result.data
    store.dispatch({
      type: CART_LOADED,
      payload: {
        cart: cart
      }
    })
  })
}

const addToCart = (id, quantity) => {
  return axios.post('http://apoteket-uppgift-fe.ginzburg.it/api/cart',
    {Id: id, Quantity: quantity},
    {headers: {'X-Key': 'qwerty', 'Access-Control-Allow-Origin': '*'}})
    .then(getCart)
    .catch(e => {
      console.error('Failed adding to cart.', e)
    })
}

const clearCart = () => {
  return axios.delete('http://apoteket-uppgift-fe.ginzburg.it/api/cart',
    {headers: {'X-Key': 'qwerty', 'Access-Control-Allow-Origin': 'http://apoteket-uppgift-fe.ginzburg.it'}}).then((result) => {
    return result.data
  })
}

export {
  getProducts,
  getCart,
  addToCart,
  clearCart
}
