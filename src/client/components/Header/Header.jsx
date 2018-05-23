import React from 'react'
import PropTypes from 'prop-types'
import style from './Header.scss'
import banner from '../../../img/banner.svg'
import Cart from '../cart/Cart'

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

export default Header
