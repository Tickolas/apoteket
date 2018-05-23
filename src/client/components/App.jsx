import React, { Component } from 'react'
import { getCart, getProducts } from '../util/ShopUtil'
import Products from './product/Products'
import style from './App.scss'
import { updateMockCart } from '../util/MockCartUtil'
import Header from './Header/Header'
import { connect } from 'react-redux'
import { LOAD_PRODUCTS } from '../actions/ProductActions'
import PropTypes from 'prop-types'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cart: {Items: [], Total: 0}
    }
  }

  componentDidMount () {
    this.props.loadProducts()
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
        <Header store={this.props.store} cart={this.state.cart} onClearCart={() => this.onClearCart()} />
        <div className={style.main}>
          <Products store={this.props.store} onAddToCart={(product, quantity) => this.onAddToCart(product, quantity)} />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  loadProducts: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadProducts: () => dispatch({type: LOAD_PRODUCTS})
  }
}

export default connect(state => state, mapDispatchToProps)(App)
