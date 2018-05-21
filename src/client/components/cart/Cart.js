import React from 'react'
import PropTypes from 'prop-types'
import style from './Cart.scss'

const Cart = ({cart, onClear}) => {
  const clearCart = () => {
    if (window.confirm('Really clear the cart?')) {
      onClear()
    }
  }

  return (
    <div className={style.cart}>
      I am a cart {JSON.stringify(cart)}
      <button onClick={clearCart}>Clear cart</button>
    </div>
  )
}

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  onClear: PropTypes.func.isRequired
}

export default Cart
