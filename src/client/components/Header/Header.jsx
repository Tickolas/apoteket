import React from 'react'
import PropTypes from 'prop-types'
import style from './Header.scss'
import banner from '../../../img/banner.svg'
import Cart from '../cart/Cart'
import {connect} from 'react-redux'
import { TOGGLE_CART } from '../../actions/CartActions'

const Header = ({cart, onShowCart, onClearCart, products, showCart}) => {
  return (
    <header className={style.header}>
      <img className={style.header__banner} src={banner} />
      <button className={style.header__showCartButton} onClick={onShowCart}>
        Varukorg ({cart.Items.length} varor)
      </button>
      <Cart cart={cart} onClear={onClearCart} products={products} showCart={showCart} />
    </header>
  )
}

Header.propTypes = {
  cart: PropTypes.object.isRequired,
  onShowCart: PropTypes.func.isRequired,
  onClearCart: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  showCart: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    showCart: state.showCart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onShowCart: () => dispatch({type: TOGGLE_CART})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
