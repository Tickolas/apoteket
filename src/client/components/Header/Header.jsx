import React from 'react'
import PropTypes from 'prop-types'
import style from './Header.scss'
import banner from '../../../img/banner.svg'
import Cart from '../cart/Cart'
import { connect } from 'react-redux'
import { TOGGLE_CART } from '../../actions/CartActions'

const Header = ({store, cart, onShowCart, onClearCart, showCart, cartSize}) => {
  return (
    <header className={style.header}>
      <img className={style.header__banner} src={banner} />
      <button className={style.header__showCartButton} onClick={onShowCart}>
        Varukorg ({cartSize} varor)
      </button>
      <Cart store={store} cart={cart} onClear={onClearCart} showCart={showCart} />
    </header>
  )
}

Header.propTypes = {
  store: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  onShowCart: PropTypes.func.isRequired,
  onClearCart: PropTypes.func.isRequired,
  showCart: PropTypes.bool,
  cartSize: PropTypes.number
}

const mapStateToProps = (state) => {
  return {
    showCart: state.cartReducer.showCart,
    cartSize: state.cartReducer.cart.Items.length,
    products: state.productsReducer.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onShowCart: () => dispatch({type: TOGGLE_CART})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
