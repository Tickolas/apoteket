import React from 'react'
import PropTypes from 'prop-types'
import style from './Cart.scss'
import CartItem from './CartItem'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { CLEAR_CART } from '../../actions/CartActions'

const Cart = ({cart, onClearCart, products, showCart}) => {
  console.log('cart upda', cart, products)
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
      return <button className={style.cart__header__clearCart} onClick={onClearCart}>Töm varukorg</button>
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
  onClearCart: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  showCart: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    showCart: state.cartReducer.showCart,
    cart: state.cartReducer.cart,
    products: state.productsReducer.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClearCart: () => {
      if (window.confirm('Töm varukorgen?')) {
        dispatch({type: CLEAR_CART})
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
