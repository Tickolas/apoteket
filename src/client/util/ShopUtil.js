import axios from 'axios'

const getProducts = () => {
  return axios.get('http://apoteket-uppgift-fe.ginzburg.it/api/products').then((result) => {
    return result.data
  })
}

export {
  getProducts
}
