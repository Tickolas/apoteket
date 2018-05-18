import React, {Component} from 'react'
import { getProducts } from '../util/ShopUtil'
import Products from './product/Products'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      products: []
    }
  }

  componentDidMount () {
    getProducts().then(products => {
      this.setState({products})
    })
  }

  render () {
    return (
      <div>
        <Products products={this.state.products} />
      </div>
    )
  }
}
