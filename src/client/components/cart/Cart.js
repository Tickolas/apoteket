import React from 'react'
import PropTypes from 'prop-types'
import style from './Cart.scss'

const Cart = ({cart}) => {
  return (
    <div className={style.cart}>
      I am a cart {JSON.stringify(cart)}
    </div>
  )
}

Cart.propTypes = {
  cart: PropTypes.object.isRequired
}

export default Cart
