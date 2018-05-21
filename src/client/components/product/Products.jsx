import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import style from './Products.scss'

const Products = ({products}) => {
  return (
    <div className={style.products}>
      {products.map(product => {
        if (product.Name) {
          return (
            <Product product={product} />
          )
        }
      })}
    </div>
  )
}

Products.propTypes = {
  products: PropTypes.array.isRequired
}

export default Products
