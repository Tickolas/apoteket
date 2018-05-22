import React from 'react'
import PropTypes from 'prop-types'
import style from './Cart.scss'
import CartItem from './CartItem'

const Cart = ({cart, onClear, products}) => {
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

  return (
    <div className={style.cart}>
      <div>
        <span>Cart</span>
        <button onClick={clearCart}>Clear cart</button>
      </div>
      <div className={style.cart__total}>Total: {Number.parseFloat(cart.Total).toFixed(2)}:-</div>
      <div className={style.cart__cartItems}>
        {cart.Items.map(cartItem => {
          if (cartItem.Quantity) {
            return <CartItem product={productFor(cartItem)} cartItem={cartItem} />
          }
        })}
      </div>
    </div>
  )
}

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  onClear: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
}

export default Cart
