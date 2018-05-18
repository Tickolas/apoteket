import React from 'react'
import PropTypes from 'prop-types'

const Product = ({product}) => {
  return (
    <div>
      return <p>{product.Name}</p>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired
}

export default Product
