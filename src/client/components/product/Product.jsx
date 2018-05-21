import React from 'react'
import PropTypes from 'prop-types'
import style from './Product.scss'

const Product = ({product}) => {
  function getProductImage () {
    if (product.Pic) {
      return <img className={style.product__image} src={product.Pic} alt={product.Name} />
    } else {
      return <img className={style.product__image} src='/img/apotek.png' />
    }
  }

  return (
    <div className={style.product}>
      <div className={style.product__imageContainer}>{ getProductImage() }</div>
      <div className={style.product__name}>{product.Name}</div>
      <div className={style.product__description}>{product.Description}</div>
      <div className={style.product__buttons}>
        <button onClick={() => console.log('increment', product.Name)}>+</button>
        <button onClick={() => console.log('decrement', product.Name)}>-</button>
      </div>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired
}

export default Product
