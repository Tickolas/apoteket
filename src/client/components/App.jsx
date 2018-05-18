import React, {Component} from 'react'
import { getProducts } from '../util/ShopUtil'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      products: []
    }
  }

  componentDidMount () {
    getProducts().then(products => {
      console.log('products', products)
      this.setState({products})
    })
  }

  render () {
    return (
      <div>
        {this.state.products.map(product => {
          return <p>{product.Name}</p>
        })}
      </div>
    )
  }
}
