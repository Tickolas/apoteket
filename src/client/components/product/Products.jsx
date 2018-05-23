import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import style from './Products.scss'
import { connect } from 'react-redux'

const Products = ({store, products}) => {
  return (
    <div className={style.products}>
      {
        products.map(product => {
          if (product.Name) {
            return (<Product store={store} product={product} />)
          }
        })
      }
    </div>
  )
}

Products.propTypes = {
  store: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.products
  }
}

export default connect(mapStateToProps)(Products)
