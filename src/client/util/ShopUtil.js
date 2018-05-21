import axios from 'axios'

const getProducts = () => {
  return axios.get('http://apoteket-uppgift-fe.ginzburg.it/api/products').then((result) => {
    return result.data
  })
}

const getCart = () => {
  // test API does not support OPTIONS, which is needed for CORS check. Using CORS anywhere bypass.
  return axios.get('https://cors-anywhere.herokuapp.com/http://apoteket-uppgift-fe.ginzburg.it/api/cart',
    {headers: { 'X-Key': 'qwerty' }}).then((result) => {
    return result.data
  })
}

const addToCart = ({id, quantity}) => {
  // test API does not support OPTIONS, which is needed for CORS check. Using CORS anywhere bypass.
  return axios.post('https://cors-anywhere.herokuapp.com/http://apoteket-uppgift-fe.ginzburg.it/api/cart',
    {Id: id, Quantity: quantity},
    {headers: {'X-Key': 'qwerty', 'Access-Control-Allow-Origin': '*'}}).then((result) => {
    return result.data
  })
}

const clearCart = () => {
  // test API does not support OPTIONS, which is needed for CORS check. Using CORS anywhere bypass.
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
