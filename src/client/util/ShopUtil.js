import axios from 'axios'

const getProducts = () => {
  return axios.get('http://apoteket-uppgift-fe.ginzburg.it/api/products').then((result) => {
    return result.data
  })
}

const getCart = () => {
  return axios.get('http://apoteket-uppgift-fe.ginzburg.it/api/cart', {headers: { 'X-Key': 'qwerty' }}).then((result) => {
    return result.data
  })
}

export {
  getProducts,
  getCart
}
