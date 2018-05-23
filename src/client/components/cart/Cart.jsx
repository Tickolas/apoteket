import React from 'react'
import PropTypes from 'prop-types'
import style from './Cart.scss'
import CartItem from './CartItem'
import classnames from 'classnames'
import { connect } from 'react-redux'

const Cart = ({cart, onClear, products, showCart}) => {
  const clearCart = () => {
    if (window.confirm('Really clear the cart?')) {
      onClear()
    }
  }

  const productFor = cartItem => {
    return products.find(product => {
      return product.Id === cartItem.Id
    })
  }

  const cartClassNames = () => {
    if (showCart) {
      return style.cart
    } else {
      return classnames(style.cart, style['cart--disabled'])
    }
  }

  const getCartContent = () => {
    if (cart.Items.length) {
      return cart.Items.map(cartItem => {
        if (cartItem.Quantity) {
          return <CartItem product={productFor(cartItem)} cartItem={cartItem} />
        }
      })
    } else {
      return 'Varukorgen är tom'
    }
  }

  const getClearCartButton = () => {
    if (cart.Items.length) {
      return <button className={style.cart__header__clearCart} onClick={clearCart}>Töm varukorg</button>
    }
  }

  return (
    <div className={cartClassNames()}>
      <div className={style.cart__header}>
        <span className={style.cart__header__text}>Varukorg</span>
        {getClearCartButton()}
      </div>
      <div className={style.cart__cartItems}>
        {getCartContent()}
      </div>
      <div className={style.cart__footer}>Total: {Number.parseFloat('' + cart.Total).toFixed(2)}:-</div>
    </div>
  )
}

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  onClear: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  showCart: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.products
  }
}

export default connect(mapStateToProps)(Cart)
