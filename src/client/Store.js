import { createStore, combineReducers } from 'redux'
import cartReducer, {initialState as cartReducerInitialState} from './reducers/CartReducer'
import productsReducer, {initialState as productsReducerInitialState} from './reducers/ProductsReducer'

const store = createStore(
  combineReducers({cartReducer, productsReducer}),
  {
    cartReducer: {...cartReducerInitialState},
    productsReducer: {...productsReducerInitialState}
  }
)

export default store
