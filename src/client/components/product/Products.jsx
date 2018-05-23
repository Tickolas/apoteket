import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import style from './Products.scss'
import { connect } from 'react-redux'

const Products = ({products, onAddToCart}) => {
  return (
    <div className={style.products}>
      {
        products.map(product => {
          if (product.Name) {
            return (
              <Product product={product} onAddToCart={onAddToCart} />
            )
          }
        })
      }
    </div>
  )
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.products
  }
}

export default connect(mapStateToProps)(Products)
