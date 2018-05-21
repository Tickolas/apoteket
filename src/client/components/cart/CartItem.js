import React from 'react'
import PropTypes from 'prop-types'
import style from './CartItem.scss'

const CartItem = ({product, cartItem}) => {
  return (
    <div className={style.cartItem}>
      {product.Name} - {product.Price}:- [{cartItem.Quantity}]
    </div>
  )
}

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
  cartItem: PropTypes.object.isRequired
}

export default CartItem
