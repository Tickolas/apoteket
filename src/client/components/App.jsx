import React, { Component } from 'react'
import { getCart, getProducts } from '../util/ShopUtil'
import Products from './product/Products'
import Cart from './cart/Cart'
import style from './App.scss'
import banner from '../../img/banner.svg'
import { updateMockCart } from '../util/MockCartUtil'

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
    // TODO: Cart doesn't really work. Mocking for now.
    this.setState({
      cart: updateMockCart({Id, Price}, quantity, this.state.cart)
    })

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

  onClearCart () {
    // TODO: Cart doesn't really work. Mocking for now.
    this.setState({cart: {Items: [], Total: 0}})
  }

  render () {
    return (
      <div>
        <header className={style.header}>
          <img className={style.header__banner} src={banner} />
        </header>
        <div className={style.main}>
          <Products products={this.state.products}
            onAddToCart={(product, quantity) => this.onAddToCart(product, quantity)} />
          <Cart cart={this.state.cart} onClear={() => this.onClearCart()}
            products={this.state.products} />
        </div>
      </div>
    )
  }
}
