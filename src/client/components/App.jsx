import React, { Component } from 'react'
import { addToCart, clearCart, getCart, getProducts } from '../util/ShopUtil'
import Products from './product/Products'
import Cart from './cart/Cart'
import style from './App.scss'
import banner from '../../img/banner.svg'

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
    getCart()
  }

  onAddToCart ({id, quantity}) {
    addToCart({id, quantity}).then(() => {
      this.updateCart()
    })
  }

  updateCart () {
    getCart().then(cart => {
      this.setState({cart})
    })
  }

  render () {
    return (
      <div>
        <header className={style.header}>
          <img className={style.header__banner} src={banner} />
        </header>
        <div className={style.main}>
          <Products products={this.state.products} onAddToCart={({id, quantity}) => this.onAddToCart({id, quantity})} />
          <Cart cart={this.state.cart} onClear={clearCart} />
        </div>
      </div>
    )
  }
}
