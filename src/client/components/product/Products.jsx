import React from 'react'
import Product from './Product'
import PropTypes from 'prop-types'

const Products = ({products}) => {
  return (
    <div>
      {products.map(product => {
        return <Product product={product} />
      })}
    </div>
  )
}

Products.propTypes = {
  products: PropTypes.array.isRequired
}

export default Products
