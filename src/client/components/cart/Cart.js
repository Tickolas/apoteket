import React from 'react'
import PropTypes from 'prop-types'
import style from './Cart.scss'
import CartItem from './CartItem'
import classnames from 'classnames'

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
    if ( cart.Items.length ) {
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
      return <button onClick={clearCart}>Clear cart</button>
    }
  }

  return (
    <div className={cartClassNames()}>
      <div className={style.cart__header}>
        <span>Varukorg</span>
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

export default Cart
