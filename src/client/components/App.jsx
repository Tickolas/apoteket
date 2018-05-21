import React, {Component} from 'react'
import { getCart, getProducts } from '../util/ShopUtil'
import Products from './product/Products'
import Cart from './cart/Cart'
import style from './App.scss'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      products: [],
      cart: {}
    }
  }

  componentDidMount () {
    getProducts().then(products => {
      this.setState({products})
    })
    getCart().then(cart => {
      console.log('cart', cart)
      this.setState({cart})
    })
  }

  render () {
    return (
      <div className={style.main}>
        <Products products={this.state.products} />
        <Cart cart={this.state.cart} />
      </div>
    )
  }
}
