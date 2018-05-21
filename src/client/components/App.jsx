import React, { Component } from 'react'
import { clearCart, getCart, getProducts } from '../util/ShopUtil'
import Products from './product/Products'
import Cart from './cart/Cart'
import style from './App.scss'
import banner from '../../img/banner.svg'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      products: [],
      cart: {Items: [], Total: 0}
    }
  }

  componentDidMount () {
    getProducts().then(products => {
      this.setState({products})
    })
    getCart()
  }

  onAddToCart ({Id, Price}, quantity) {
    let cart = this.state.cart
    let i = cart.Items.findIndex(cartItem => {
      return cartItem.Id === Id
    })
    if (i >= 0) {
      cart.Items[i] = {
        Id,
        Quantity: cart.Items[i].Quantity + quantity
      }
    } else {
      cart.Items.push({Id, Quantity: quantity})
    }
    cart.Total = cart.Total + (Price * quantity)
    this.setState({cart})

    // TODO: Cart doesn't really work. Mocking for now.
    // addToCart({id, quantity}).then(() => {
    //   this.updateCart()
    // })
  }

  // TODO: Cart doesn't really work. Mocking for now.
  // updateCart () {
  //   getCart().then(cart => {
  //     this.setState({cart})
  //   })
  // }

  render () {
    return (
      <div>
        <header className={style.header}>
          <img className={style.header__banner} src={banner} />
        </header>
        <div className={style.main}>
          <Products products={this.state.products} onAddToCart={(product, quantity) => this.onAddToCart(product, quantity)} />
          <Cart cart={this.state.cart} onClear={clearCart} />
        </div>
      </div>
    )
  }
}
