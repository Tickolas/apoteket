import React from 'react'
import PropTypes from 'prop-types'
import style from './Product.scss'
import logo from '../../../img/apotek.png'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { ADD_TO_CART } from '../../actions/CartActions'

const Product = ({product, onAddToCart}) => {
  function getProductImage () {
    if (product.Pic) {
      return <img className={style.product__image} src={product.Pic} alt={product.Name} />
    } else {
      return <img className={style.product__image} src={logo} />
    }
  }

  function productClassNames () {
    if (product.Buyable) {
      return style.product
    } else {
      return classnames(style.product, style['product--disabled'])
    }
  }

  return (
    <div className={productClassNames()}>
      <div className={style.product__imageContainer}>{ getProductImage() }</div>
      <div className={style.product__name}>{product.Name}</div>
      <div className={style.product__description}>{product.Description}</div>
      <div className={style.product__buttons}>
        <span>{Number.parseFloat(product.Price).toFixed(2)}:- </span>
        <button onClick={() => onAddToCart(product, 1)}>+</button>
        <button onClick={() => onAddToCart(product, -1)}>-</button>
      </div>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (product, quantity) => {
      console.log('dispatch ADD_TO_CART')
      dispatch({type: ADD_TO_CART, product, quantity})
    }
  }
}

export default connect(state => state, mapDispatchToProps)(Product)
