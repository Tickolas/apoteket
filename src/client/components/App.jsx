import React, { Component } from 'react'
import Products from './product/Products'
import style from './App.scss'
import Header from './Header/Header'
import { connect } from 'react-redux'
import { LOAD_PRODUCTS } from '../actions/ProductActions'
import { GET_CART } from '../actions/CartActions'
import PropTypes from 'prop-types'

class App extends Component {
  componentDidMount () {
    this.props.loadProducts()
    this.props.getCart()
  }

  render () {
    return (
      <div>
        <Header store={this.props.store} />
        <div className={style.main}>
          <Products store={this.props.store} />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  loadProducts: PropTypes.func.isRequired,
  getCart: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadProducts: () => dispatch({type: LOAD_PRODUCTS}),
    getCart: () => dispatch({type: GET_CART})
  }
}

export default connect(state => state, mapDispatchToProps)(App)
